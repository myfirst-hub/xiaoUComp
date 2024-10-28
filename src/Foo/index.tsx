import React, { type FC } from 'react';
import './index.less';

const Foo: FC<{ title: string }> = (props) => <h4 className='def'>{props.title}</h4>;

export default Foo;
