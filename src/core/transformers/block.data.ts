import { ARDUINO_UNO_PINS } from '../../constants/arduino';

export enum BlockType {
  SETUP = 'SETUP',
  SENSOR_SETUP = 'SENSOR_SETUP',
  SENSOR_READ = 'SENSOR_READ',
  STATE = 'STATE',
  VALUE = 'VALUE',
  ARDUINO = 'ARDUINO',
  FUNCTION = 'FUNCTION',
  NONE = 'NONE',
  LIST_CREATE = 'LIST_CREATE'
}

export enum PinCategory {
  NONE = 'NONE',
  BLUETOOTH = 'BLUETOOH',
  BUTTON = 'BUTTON',
  IR_REMOTE = 'IR_REMOTE',
  LCD_SCREEN = 'LCD_SCREEN',
  LED_STRIP = 'LED_STRIP',
  LED_MATRIX = 'LED_MATRIX',
  LED_COLOR = 'LED_COLOR',
  ULTRA_SONIC = 'ULTRA_SONIC',
  DIGITAL_WRITE = 'DIGITAL_WRITE',
  ANALOG_WRITE = 'ANALOG_WRITE',
  DIGITAL_READ_SETUP = 'DIGITAL_READ_SETUP',
  ANALOG_READ_SETUP = 'ANALOG_READ_SETUP',
  RFID = 'RFID',
  SERVO = 'SERVO',
  TEMP = 'TEMP'
}

export enum PinFieldNames {
  RX = 'RX',
  TX = 'TX',
  PIN = 'PIN',
  ECHO = 'ECHO',
  TRIG = 'TRIG'
}

export enum BlocklyInputTypes {
  INPUT_STATEMENT = 3,
  INPUT_BLOCK = 1
}

export const blocksToBlockTypes: {
  [type: string]: { type: BlockType; pinCategory: PinCategory };
} = {
  arduino_loop: { type: BlockType.ARDUINO, pinCategory: PinCategory.NONE },
  arduino_setup: { type: BlockType.ARDUINO, pinCategory: PinCategory.NONE },
  procedures_defnoreturn: {
    type: BlockType.FUNCTION,
    pinCategory: PinCategory.NONE
  },
  create_list_number_block: {
    type: BlockType.LIST_CREATE,
    pinCategory: PinCategory.NONE
  },
  get_number_from_list: {
    type: BlockType.VALUE,
    pinCategory: PinCategory.NONE
  },
  create_list_string_block: {
    type: BlockType.LIST_CREATE,
    pinCategory: PinCategory.NONE
  },
  get_string_from_list: {
    type: BlockType.VALUE,
    pinCategory: PinCategory.NONE
  },
  create_list_boolean_block: {
    type: BlockType.LIST_CREATE,
    pinCategory: PinCategory.NONE
  },
  get_boolean_from_list: {
    type: BlockType.VALUE,
    pinCategory: PinCategory.NONE
  },
  create_list_colour_block: {
    type: BlockType.LIST_CREATE,
    pinCategory: PinCategory.NONE
  },
  get_colour_from_list: {
    type: BlockType.VALUE,
    pinCategory: PinCategory.NONE
  },
  variables_get_number: {
    type: BlockType.VALUE,
    pinCategory: PinCategory.NONE
  },
  variables_get_string: {
    type: BlockType.VALUE,
    pinCategory: PinCategory.NONE
  },
  variables_get_boolean: {
    type: BlockType.VALUE,
    pinCategory: PinCategory.NONE
  },
  variables_get_colour: {
    type: BlockType.VALUE,
    pinCategory: PinCategory.NONE
  },
  colour_random: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  colour_rgb: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  math_number: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  math_arithmetic: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  string_to_number: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  math_round: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  math_modulo: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  math_random_int: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  text_join: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  colour_picker: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  text: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  text_length: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  parse_string_block: {
    type: BlockType.VALUE,
    pinCategory: PinCategory.NONE
  },
  number_to_string: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  text_isEmpty: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  text_changeCase: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  variables_set_colour: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  variables_set_boolean: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  logic_boolean: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  variables_set_string: {
    type: BlockType.VALUE,
    pinCategory: PinCategory.NONE
  },
  set_number_list_block: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  set_boolean_list_block: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  set_colour_list_block: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  variables_set_number: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  procedures_callnoreturn: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  controls_ifelse: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  control_if: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  logic_compare: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  controls_repeat_ext: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  logic_operation: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  controls_for: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  logic_negate: { type: BlockType.VALUE, pinCategory: PinCategory.NONE },
  debug_block: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  message_setup: { type: BlockType.SENSOR_SETUP, pinCategory: PinCategory.NONE },
  arduino_get_message: {
    type: BlockType.SENSOR_READ,
    pinCategory: PinCategory.NONE
  },
  arduino_receive_message: {
    type: BlockType.SENSOR_READ,
    pinCategory: PinCategory.NONE
  },
  time_setup: { type: BlockType.SENSOR_SETUP, pinCategory: PinCategory.NONE },
  time_seconds: { type: BlockType.SENSOR_READ, pinCategory: PinCategory.NONE },
  delay_block: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  arduino_send_message: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  bluetooth_setup: { type: BlockType.SENSOR_SETUP, pinCategory: PinCategory.BLUETOOTH },
  bluetooth_send_message: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  bluetooth_has_message: {
    type: BlockType.SENSOR_READ,
    pinCategory: PinCategory.NONE
  },
  bluetooth_get_message: {
    type: BlockType.SENSOR_READ,
    pinCategory: PinCategory.NONE
  },
  lcd_setup: { type: BlockType.SETUP, pinCategory: PinCategory.LCD_SCREEN },
  lcd_screen_print: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  led: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  led_color_setup: { type: BlockType.SETUP, pinCategory: PinCategory.LED_COLOR },
  neo_pixel_setup: { type: BlockType.SETUP, pinCategory: PinCategory.LED_STRIP },
  led_matrix_make_draw: {
    type: BlockType.STATE,
    pinCategory: PinCategory.LED_MATRIX
  },
  neo_pixel_set_color: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  rotate_servo: { type: BlockType.STATE, pinCategory: PinCategory.SERVO },
  lcd_screen_clear: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  led_fade: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  led_matrix_turn_one_on_off: {
    type: BlockType.STATE,
    pinCategory: PinCategory.LED_MATRIX
  },
  move_motor: { type: BlockType.STATE, pinCategory: PinCategory.NONE }, // NO WAY TO CHECK BECAUSE OF shield
  lcd_scroll: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  set_color_led: { type: BlockType.STATE, pinCategory: PinCategory.LED_COLOR },
  lcd_backlight: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  digital_write: { type: BlockType.STATE, pinCategory: PinCategory.DIGITAL_WRITE },
  lcd_blink: { type: BlockType.STATE, pinCategory: PinCategory.NONE },
  analog_write: { type: BlockType.STATE, pinCategory: PinCategory.ANALOG_WRITE },
  lcd_screen_simple_print: {
    type: BlockType.STATE,
    pinCategory: PinCategory.NONE
  },
  analog_read_setup: { type: BlockType.SENSOR_SETUP, pinCategory: PinCategory.ANALOG_READ_SETUP },
  analog_read: { type: BlockType.SENSOR_READ, pinCategory: PinCategory.NONE },
  button_setup: { type: BlockType.SENSOR_SETUP, pinCategory: PinCategory.BUTTON },
  is_button_pressed: { type: BlockType.SENSOR_READ, pinCategory: PinCategory.NONE },
  digital_read_setup: {
    type: BlockType.SENSOR_SETUP,
    pinCategory: PinCategory.DIGITAL_READ_SETUP
  },
  digital_read: { type: BlockType.ARDUINO, pinCategory: PinCategory.NONE },
  ir_remote_setup: { type: BlockType.ARDUINO, pinCategory: PinCategory.IR_REMOTE },
  ir_remote_has_code_receive: {
    type: BlockType.ARDUINO,
    pinCategory: PinCategory.NONE
  },
  ir_remote_get_code: {
    type: BlockType.ARDUINO,
    pinCategory: PinCategory.NONE
  },
  ultra_sonic_sensor_setup: {
    type: BlockType.ARDUINO,
    pinCategory: PinCategory.ULTRA_SONIC
  },
  ultra_sonic_sensor_motion: {
    type: BlockType.ARDUINO,
    pinCategory: PinCategory.NONE
  },
  rfid_setup: { type: BlockType.ARDUINO, pinCategory: PinCategory.RFID },
  rfid_card: { type: BlockType.ARDUINO, pinCategory: PinCategory.NONE },
  rfid_tag: { type: BlockType.ARDUINO, pinCategory: PinCategory.NONE },
  rfid_scan: { type: BlockType.ARDUINO, pinCategory: PinCategory.NONE },
  temp_setup: { type: BlockType.ARDUINO, pinCategory: PinCategory.TEMP },
  temp_get_temp: { type: BlockType.ARDUINO, pinCategory: PinCategory.NONE },
  temp_get_humidity: { type: BlockType.ARDUINO, pinCategory: PinCategory.NONE }
};

export interface BlockData {
  id: string;
  blockName: string;
  inputBlocks: Input[]; // Blocks connected to the the block that produce values
  inputStatements: InputStatement[]; // Theses are things like inside an if block or arduino loop
  fieldValues: FieldValue[]; // dropdown checkbox text input etc
  nextBlockId: string | undefined; // the block below
  type: BlockType | undefined;
  rootBlockId: string | undefined;
  pins: ARDUINO_UNO_PINS[];
  pinCategory: PinCategory;
}

export interface FieldValue {
  name: string;
  value: string;
}

export interface InputStatement {
  blockId: string | undefined;
  name: string;
}

export interface Input {
  blockId: string | undefined;
  name: string;
}
