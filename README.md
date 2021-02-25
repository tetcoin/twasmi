[![crates.io link](https://img.shields.io/crates/v/twasmi.svg)](https://crates.io/crates/twasmi)
[![Build Status](https://travis-ci.org/tetcoin/twasmi.svg?branch=master)](https://travis-ci.org/tetcoinn/twasmi)

# `twasmi`

WASM interpreter (previously lived in [tetsy-wasm](https://github.com/tetcoin/tetsy-wasm))

Primary purpose of `twasmi` is to be used with [tetsy-vapory](https://github.com/openvapory/tetsy-vapory) (vapory-like contracts in wasm) and with [Tetcoin](https://github.com/tetcoin/tetcoin). However, `twasmi` is designed to be as flexible as possible and might be suited well for other purposes.

At the moment, the API is rather low-level (especially, in the part related to host functions). But some high-level API is on the roadmap.

# License

`twasmi` is primarily distributed under the terms of both the MIT
license and the Apache License (Version 2.0), at your choice.

See LICENSE-APACHE, and LICENSE-MIT for details.

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in `twasmi` by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.
