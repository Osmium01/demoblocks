import { BlockSvg } from 'blockly';
import {
  BlockData,
  Input,
  InputStatement,
  blocksToBlockTypes,
  FieldValue,
  PinFieldNames,
  BlocklyInputTypes
} from './block.data';
import _ from 'lodash';
import { ARDUINO_UNO_PINS } from '../../constants/arduino';

export interface BlockTransformer {
  (block: BlockSvg): BlockData;
}

const getNextBlockId = (block: BlockSvg): string | undefined => {
  if (_.isEmpty(block.nextConnection)) {
    return undefined;
  }

  if (_.isEmpty(block.nextConnection.targetBlock())) {
    return undefined;
  }

  return block.nextConnection.targetBlock().id;
};

const getRootBlockId = (block: BlockSvg): string | undefined => {
  const rootBlock = block.getRootBlock();
  return rootBlock && rootBlock.id !== block.id ? rootBlock.id : undefined;
};

const getFieldValues = (block: BlockSvg): FieldValue[] => {
  return block.inputList
    .map((input) => {
      return input.fieldRow
        .filter((field) => field.EDITABLE)
        .map((field) => {
          return {
            name: field.name,
            value: field.getValue()
          };
        });
    })
    .reduce((prev, next) => {
      return [...prev, ...next];
    }, []);
};

const getPins = (block: BlockSvg): ARDUINO_UNO_PINS[] => {
  return getFieldValues(block)
    .filter((field) => field['name'] in PinFieldNames)
    .map((field) => field.value as ARDUINO_UNO_PINS);
};

const getInputs = (block: BlockSvg): Input[] => {
  return block.inputList
    .filter((input) => input.type === +BlocklyInputTypes.INPUT_BLOCK)
    .map((input) => {
      const targetBlock = input.connection.targetBlock();
      const name = input.name;
      const blockId = targetBlock ? targetBlock.id : undefined;
      return {
        name,
        blockId
      };
    });
};

const getInputStatements = (block: BlockSvg): InputStatement[] => {
  return block.inputList
    .filter((input) => input.type === +BlocklyInputTypes.INPUT_STATEMENT)
    .map((input) => {
      const targetBlock = block.getInputTargetBlock(input.name);
      const name = input.name;
      const blockId = targetBlock ? targetBlock.id : undefined;
      return {
        name,
        blockId
      };
    });
};

export const transformBlock = (block: BlockSvg): BlockData => {
  return {
    id: block.id,
    blockName: block.type,
    type: blocksToBlockTypes[block.type].type,
    inputBlocks: getInputs(block),
    inputStatements: getInputStatements(block),
    fieldValues: getFieldValues(block),
    nextBlockId: getNextBlockId(block),
    rootBlockId: getRootBlockId(block),
    pinCategory: blocksToBlockTypes[block.type].pinCategory,
    pins: getPins(block)
  };
};
