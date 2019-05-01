import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PanelDetalles from '../controllers/PanelDetalles';
import { Button, Welcome } from '@storybook/react/demo';
import Toolbox from '../controllers/Toolbox';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('Panel Detalles',module)
    .add('default',() => (
      <PanelDetalles></PanelDetalles>
    ));

storiesOf('Toolbox',module)
  .add('default',() => (
    <Toolbox></Toolbox>
  ));

  require('../controllers/Toolbox');
  require('../controllers/PanelDetalles');