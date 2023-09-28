import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import theme from "@/utils/theme"
import Head from 'next/head';
import PageLayout from "@/components/general/PageLayout";
// font weights
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (page: React.ReactElement) => <PageLayout children={page} />;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/chimpanzee-32.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="main">
          {getLayout(<Component {...pageProps} />)}
        </Box>
      </ThemeProvider>
    </>
  )
}
