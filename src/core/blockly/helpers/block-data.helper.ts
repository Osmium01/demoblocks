import { BlockData } from '../state/block.data';

export const findFieldValue = (block: BlockData, fieldName: string) => {
  const field = block.fieldValues.find((f) => f.name === fieldName);
  return field ? field.value : undefined;
};

export const findArduinoLoopBlock = (blocks: BlockData[]) => {
  return blocks.find((block) => block.blockName == 'arduino_loop');
};

export const findBlockById = (blocks: BlockData[], blockId: string) => {
  return blocks.find((b) => b.id === blockId);
};

export const findInputStatementStartBlock = (
  blocks: BlockData[],
  block: BlockData,
  inputStatement: string
) => {
  const blockId = block.inputStatements.find((i) => i.name == inputStatement)
    .blockId;

  return findBlockById(blocks, blockId);
};

export const getLoopTimeFromBlockData = (blocks: BlockData[]): number => {
  return +findArduinoLoopBlock(blocks).fieldValues.find(
    (field) => field.name === 'LOOP_TIMES'
  ).value;
};

export const findRootBlock = (block: BlockData, blocks: BlockData[]) => {
  return blocks.find((b) => block.rootBlockId === b.id);
};