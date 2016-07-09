# clang-tools-prebuilt

[![Build Status](https://travis-ci.org/hokein/clang-tools-prebuilt.svg?branch=master)](https://travis-ci.org/hokein/clang-tools-prebuilt)

Install clang tools prebuilt binaries for command-line usage via npm. The module
helps you easily install clang tools command for use without compile anything.

Currently, the module provides clang tools in [clang-tool-extra](http://clang.llvm.org/extra/):
  * clang-tidy
  * clang-include-fixer
  * find-all-symbol

## Installation

Install all clang tools globally:

```
npm install -g clang-tools-prebuilt
```

Now you can run clang tools command:

```
clang-tidy ...
clang-include-fixer ...
find-all-symbols ...
```

## About

It supports macOS and Linux.
