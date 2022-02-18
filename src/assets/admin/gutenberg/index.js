import * as block from './block';

// Store.
import './store/index';

// Extensions.
import './extensions/block-styles';
import './extensions/ghostkit-grid';

const { registerBlockType } = wp.blocks;

registerBlockType(block.name, block.settings);
