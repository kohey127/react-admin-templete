import { createTheme } from '@mui/material';
import { jaJP } from '@mui/material/locale';
import { jaJP as dataGridJaJP } from '@mui/x-data-grid';

const 菖蒲色 = {
    main: '#674196',
};

export const theme = createTheme(
    {
        typography: {
            fontFamily: [
                'Noto Sans JP',
                'Yu Gothic',
                '游ゴシック',
                '"YuGothic"',
                '游ゴシック体',
                'ヒラギノ角ゴ Pro W3',
                'メイリオ',
                '"sans-serif"',
            ].join(','),
        },
        palette: {
            primary: 菖蒲色,
            error: {
                main: '#ED4757',
            },
            warning: {
                main: '#FAAA14',
                light: '#E3DEF0',
            },
            success: {
                main: '#5DBF4B',
            },
            info: {
                main: '#4690F7',
                light: '#FFA116',
            },
            text: {
                primary: '#301850',
                secondary: '#685D71',
            },
        },
    },
    jaJP,
    dataGridJaJP,
);
