import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
    // allow configuration using `createTheme`
    interface CustomThemeOptions extends ThemeOptions {
        palette?: {
            primary?: {
                main: string,
            },
            secondary?: {
                main: string,
            },
            text?: {
                primary: string,
                secondary: string,
            },
            background?: {
                default: string,
                paper: string,
            }
        },
        typography?: {
            fontFamily: React.CSSProperties['fontFamily'],
            h1?: {
                fontFamily: React.CSSProperties['fontFamily'],
                fontSize: number,
                fontWeightBold: React.CSSProperties['fontWeight'],
            },
            h2?: {
                fontFamily: React.CSSProperties['fontFamily'],
                fontSize: number,
                fontWeightBold: React.CSSProperties['fontWeight'],
            },
            h3?: {
                fontSize: number,
                fontWeightBold: React.CSSProperties['fontWeight'],
            }, 
            body1?: {
                fontSize: number,
            }
        }
    }

    export function createTheme(options?: CustomThemeOptions): Theme;
};

const mainTheme = createTheme({
    palette: {
        primary: {
            main: "#A26952",
        },
        secondary: {
            main: "#FF8C5B",
        },
        text: {
            primary: "#A26952",
            secondary: "#FF8C5B",
        },
        background: {
            default: "#FDF2DD",
            paper: "#55433B",
        }
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
        h1: {
            fontFamily: '"Poppins", sans-serif',
            fontSize: 88,
            fontWeight: "bold",
        },
        h2: {
            fontFamily: '"Poppins", sans-serif',
            fontSize: 44,
            fontWeight: "bold",
        },
        h3: {
            fontSize: 22,
            fontWeight: "bold",
        }, 
        body1: {
            fontSize: 16,
        }
    }
});

//example: <Typography variant="h1" color="textPrimary">

export default mainTheme;
