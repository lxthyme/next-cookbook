module.exports = (phase, ctx) => {
    console.log('phase: ', phase)
    console.log('ctx: ', ctx)
    return {
        poweredByHeader: false,
    }
}

/**
const ctx = {
    defaultConfig: {
        env: [],
        webpack: null,
        webpackDevMiddleware: null,
        distDir: '.next',
        assetPrefix: '',
        configOrigin: 'default',
        useFileSystemPublicRoutes: true,
        generateBuildId: [Function: generateBuildId],
        generateEtags: true,
        pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
        target: 'server',
        poweredByHeader: true,
        compress: true,
        devIndicators: {
            buildActivity: true,
            autoPrerender: true
        },
        onDemandEntries: {
            maxInactiveAge: 60000,
            pagesBufferLength: 2
        },
        amp: {
            canonicalBase: ''
        },
        exportTrailingSlash: false,
        experimental: {
            ampBindInitData: false,
            cpus: 3,
            css: false,
            documentMiddleware: false,
            granularChunks: false,
            modern: false,
            profiling: false,
            publicDirectory: false,
            sprFlushToDisk: true
        },
        future: {
            excludeDefaultMomentLocales: false
        },
        serverRuntimeConfig: {},
        publicRuntimeConfig: {}
    }
}
 */
