"require" adds modules to caches before it starts loading the module.
If the required would be called again during loading it would check the cache to avoid going into infinite loading loop.