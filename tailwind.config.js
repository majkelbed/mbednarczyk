const plugin = require('tailwindcss/plugin');

module.exports = {
    plugins: [
        plugin(function({ addComponents }) {
          addComponents({
            '.container': {
                maxWidth: 'unset',
                paddingRight: '1rem',
                paddingLeft: '1rem',
                "@screen sm": {
                    paddingRight: 'calc(50% - 280px)',
                    paddingLeft: 'calc(50% - 280px)',
                },
                "@screen md": {
                    paddingRight: 'calc(50% - 320px)',
                    paddingLeft: 'calc(50% - 320px)',
                },
                "@screen lg": {
                    paddingRight: 'calc(50% - 450px)',
                    paddingLeft: 'calc(50% - 450px)',
                },
                "@screen xl": {
                    paddingRight: 'calc(50% - 580px)',
                    paddingLeft: 'calc(50% - 580px)',
                },
            },
            '.left-container': {
                left: '-1rem',
                "@screen sm": {
                    left: 'calc(280px - 50vw)'
                },
                "@screen md": {
                    left: 'calc(320px - 50vw)'
                },
                "@screen lg": {
                    left: 'calc(450px - 50vw)'
                },
                "@screen xl": {
                    left: 'calc(580px - 50vw)'

                },
            }
          });
        })
    ]
  }