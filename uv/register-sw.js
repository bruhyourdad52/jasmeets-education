(async () => {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('/uv/uv.sw.js', {
                scope: '/uv/service/'
            });
        } catch (err) {
            console.error('UV SW registration failed:', err);
        }
    }
})();
