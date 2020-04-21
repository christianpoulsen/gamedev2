import * as AllColors from '@material-ui/core/colors';

export const getRandomMUIColor = () => {
    const { common, grey, ...Colors } = AllColors;
    const colors = Object.values(Colors);

    const index = Math.floor(Math.random() * (colors.length - 1));
    return colors[index];
}

export default getRandomMUIColor;
