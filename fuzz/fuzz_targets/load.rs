#![no_main]
#[macro_use]
extern crate libfuzzer_sys;
extern crate twasmi;

fuzz_target!(|data: &[u8]| {
	// Just check if loading some arbitrary buffer doesn't panic.
	let _ = twasmi::Module::from_buffer(data);
});
