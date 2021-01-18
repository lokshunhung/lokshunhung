import { SvgStyle } from '~/src/components/svg';
import { CatFace } from './CatFace';
import { CatHead } from './CatHead';
import { LPawDown } from './LPawDown';
import { LPawUp } from './LPawUp';
import { RPawDown } from './RPawDown';
import { RPawUp } from './RPawUp';

export const Cat = () => {
    return (
        <>
            <SvgStyle name="Cat">{require('bundle-text:./index.scss')}</SvgStyle>

            <CatHead />
            <CatFace />

            <LPawUp />
            <LPawDown />

            <RPawUp />
            <RPawDown />
        </>
    );
};
