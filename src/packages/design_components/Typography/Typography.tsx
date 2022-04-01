import classNames from 'classnames';
import styles from './typography.module.css';

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
type Size = 's8' | 's10' | 's12' | 's14' | 's16' | 's18' | 's20' | 's22' | 's24';
type Color = 'black' | 'withe' | 'green' | 'red' | 'blue' | 'grey';

type Props = {
    id?: string;
    size?: Size;
    color?: Color;
    children: string | Node;
    elementType?: ElementType;
};

const Typography: React.FC<Props> = ({
    id,
    size = '8',
    color = 'black',
    children,
    elementType: Element = 'div',
}) => {
    console.log(color);
    const classProps = classNames(styles.typography, styles[size], styles[color]);

    return (
        <Element id={id} className={classProps}>
            {children}
        </Element>
    );
};

export default Typography;
