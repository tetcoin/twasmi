[![crates.io link](https://img.shields.io/crates/v/twasmi.svg)](https://crates.io/crates/twasmi)
[![Build Status](https://travis-ci.org/tetcoin/twasmi.svg?branch=master)](https://travis-ci.org/tetcoin/twasmi)

# `twasmi`

`twasmi` - a Wasm interpreter.

`twasmi` was conceived as a component of [tetsy-vapory](https://github.com/openvapory/tetsy-vapory) (ethereum-like contracts in wasm) and [tetcore](https://github.com/tetcoin/tetcore). These projects are related to blockchain and require a high degree of correctness, even if that might be over conservative. This specifically means that we are not trying to be involved in any implementation of any of work-in-progress Wasm proposals. We are also trying to be as close as possible to the spec, which means we are trying to avoid features that is not directly supported by the spec. This means that it is flexible on the one hand and on the other hand there shouldn't be a problem migrating to another spec compliant execution engine.

With all that said, `twasmi` should be a good option for initial prototyping.

# Build & Test

As `twasmi` contains a git submodule, you need to use `--recursive` for cloning or to checkout the submodule explicitly, otherwise the testing would fail.

```
git clone https://github.com/tetcoin/twasmi.git --recursive
cd twasmi
cargo build
cargo test
```

# `no_std` support

This crate supports `no_std` environments.
Enable the `core` feature and disable default features:
```toml
[dependencies]
twasmi = {
	version = "*",
	default-features = false,
	features = "core"
}
```

When the `core` feature is enabled, code related to `std::error` is disabled.

Floating point operations in `no_std` use [`libm`](https://crates.io/crates/libm), which sometimes panics in debug mode (https://github.com/japaric/libm/issues/4).
So make sure to either use release builds or avoid WASM with floating point operations, for example by using [`deny_floating_point`](https://docs.rs/twasmi/0.4.0/twasmi/struct.Module.html#method.deny_floating_point).

# License

`twasmi` is primarily distributed under the terms of both the MIT
license and the Apache License (Version 2.0), at your choice.

See LICENSE-APACHE, and LICENSE-MIT for details.

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in `twasmi` by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.
