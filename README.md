# equality-comparison

[![npm version](https://badge.fury.io/js/equality-comparison.svg)](https://www.npmjs.com/package/equality-comparison)
[![npm downloads](https://img.shields.io/npm/dt/equality-comparison.svg)](https://www.npmjs.com/package/equality-comparison)
[![dependencies](https://img.shields.io/david/litichevskiydv/equality-comparison.svg)](https://www.npmjs.com/package/equality-comparison)
[![dev dependencies](https://img.shields.io/david/dev/litichevskiydv/equality-comparison.svg)](https://www.npmjs.com/package/equality-comparison)
[![Build Status](https://github.com/litichevskiydv/equality-comparison/actions/workflows/ci.yaml/badge.svg?branch=master)](https://github.com/litichevskiydv/equality-comparison/actions/workflows/ci.yaml)
[![Coverage Status](https://coveralls.io/repos/github/litichevskiydv/equality-comparison/badge.svg?branch=master)](https://coveralls.io/github/litichevskiydv/equality-comparison?branch=master)

Implementation of configurable equality comparer

## Functions

<dl>
<dt><a href="https://github.com/litichevskiydv/equality-comparison/wiki/equals">equals(first, second, options)</a> : <code>boolean</code></dt>
<dd><p>Method checks two objects equality.</p>
</dd>
<dt><a href="https://github.com/litichevskiydv/equality-comparison/wiki/getHashCode">getHashCode(operand, options)</a> : <code>number</code></dt>
<dd><p>Method calculates object hashcode.</p>
</dd>
</dl>

## Objects

<dl>
<dt>DefaultEqualityComparer</dt>
<dd><p>Default implementation of <a href="https://github.com/litichevskiydv/equality-comparison/wiki/EqualityComparer">EqualityComparer</a> based on functions <a href="https://github.com/litichevskiydv/equality-comparison/wiki/equals">equals</a> and <a href="https://github.com/litichevskiydv/equality-comparison/wiki/getHashCode">getHashCode</a>.</p>
</dd>
