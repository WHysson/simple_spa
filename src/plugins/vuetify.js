import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#212121',
            secondary: '#607d8b',
            accent: '#2196f3',
            error: '#e91e63',
            warning: '#ffc107',
            info: '#00bcd4',
            success: '#4caf50'
          },
        },
      },
});
