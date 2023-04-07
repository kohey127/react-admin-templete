import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { EmotionCache } from '@emotion/cache';
import createEmotionCache from '@/Presentation/createEmotionCache';
import { theme } from '@/Presentation/Theme';
const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & { emotionCache?: EmotionCache };

const App: FC<MyAppProps> = ({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}) => {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default App;
