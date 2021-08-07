import chroma from 'chroma-js';

export default {
    ColorBox: {
        width: '20%',
        height: props => props.showingFullPalette ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        verticalAlign: 'bottom',
        "&:hover button": {
            opacity: '1',
            transition: '0.5s'
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.5 ? 'black' : 'white'
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.5 ? 'rgba(0,0,0,0.6)' : 'white',
        background: 'rgba(255,255,255,0.3)',
        position: 'absolute',
        border: 'none',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase'
    },
    copyButton: {
        height: '30px',
        width: '100px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255,255,255,0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        color: props => chroma(props.background).luminance() >= 0.5 ? 'rgba(0,0,0,0.6)' : 'white',
        textTransform: 'uppercase',
        textDecoration: 'none',
        border: 'none',
        opacity: '0'
    },
    boxContent: {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px'
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)'
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
    },
    copyMessage: {
        position: 'fixed',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',
        "& h1": {
            fontWeight: '400',
            textShadow: '1px 2px black',
            background: 'rgba(255,255,255,0.2)',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
            padding: '1rem',
            textTransform: 'uppercase',
        },
        "& p": {
            fontSize: '2rem',
            fontWeight: '100',
        }
    },
    showMessage: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.3s',
    }
}