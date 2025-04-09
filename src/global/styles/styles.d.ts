import 'styled-components/native'
import theme from './theme'



declare module 'styled-components/native'{
    type ThemeType = typeof theme

    export interface DefaultTheme {

        colors:{
            // sessao verde
            green900: '#264653',
            green500: '#2A9D8F',
            green100: '#94D1BE',
    
            // Sessao branco
            withe000: '#FFFFFF',
            white100: '#EEEFEF',
            wihte300: '#E5E2DF',
    
            // Sessao Vermelha
            red900: '#FF0000',
    
            // Sessao Roxa
            purple900: '#9747FF',
    
            // Sessao Preto
            balck900: '#000000',
            
            //Sessao Cinza
            gray900:'#2E2E2E'
    
        }
    }
}