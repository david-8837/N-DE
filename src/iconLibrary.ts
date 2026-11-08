export interface IconEntry {
  id: string;
  name: string;
  category: "All" | "Design" | "Media" | "Devices" | "System" | "Navigation" | "Symbols" | "General";
  keywords: string;
}

export interface EmojiEntry {
  emoji: string;
  name: string;
  category: "All" | "Smileys" | "Gestures" | "Tech" | "Design" | "Symbols" | "Arrows";
  keywords: string;
}

export const ICON_CATEGORIES = [
  "All",
  "Design",
  "Media",
  "Devices",
  "System",
  "Navigation",
  "Symbols",
  "General",
] as const;

export const EMOJI_CATEGORIES = [
  "All",
  "Smileys",
  "Gestures",
  "Tech",
  "Design",
  "Symbols",
  "Arrows",
] as const;

export const ALL_ICON_ENTRIES: IconEntry[] = [
  {
    "id": "AArrowDown",
    "name": "AArrowDown",
    "category": "Navigation",
    "keywords": "a arrow down"
  },
  {
    "id": "AArrowUp",
    "name": "AArrowUp",
    "category": "Navigation",
    "keywords": "a arrow up"
  },
  {
    "id": "ALargeSmall",
    "name": "ALargeSmall",
    "category": "General",
    "keywords": "a large small"
  },
  {
    "id": "Accessibility",
    "name": "Accessibility",
    "category": "General",
    "keywords": "accessibility"
  },
  {
    "id": "Activity",
    "name": "Activity",
    "category": "General",
    "keywords": "activity"
  },
  {
    "id": "ActivitySquare",
    "name": "ActivitySquare",
    "category": "General",
    "keywords": "activity square"
  },
  {
    "id": "AirVent",
    "name": "AirVent",
    "category": "General",
    "keywords": "air vent"
  },
  {
    "id": "Airplay",
    "name": "Airplay",
    "category": "Media",
    "keywords": "airplay"
  },
  {
    "id": "AlarmCheck",
    "name": "AlarmCheck",
    "category": "Symbols",
    "keywords": "alarm check"
  },
  {
    "id": "AlarmClock",
    "name": "AlarmClock",
    "category": "System",
    "keywords": "alarm clock"
  },
  {
    "id": "AlarmClockCheck",
    "name": "AlarmClockCheck",
    "category": "System",
    "keywords": "alarm clock check"
  },
  {
    "id": "AlarmClockMinus",
    "name": "AlarmClockMinus",
    "category": "System",
    "keywords": "alarm clock minus"
  },
  {
    "id": "AlarmClockOff",
    "name": "AlarmClockOff",
    "category": "System",
    "keywords": "alarm clock off"
  },
  {
    "id": "AlarmClockPlus",
    "name": "AlarmClockPlus",
    "category": "System",
    "keywords": "alarm clock plus"
  },
  {
    "id": "AlarmMinus",
    "name": "AlarmMinus",
    "category": "Symbols",
    "keywords": "alarm minus"
  },
  {
    "id": "AlarmPlus",
    "name": "AlarmPlus",
    "category": "Symbols",
    "keywords": "alarm plus"
  },
  {
    "id": "AlarmSmoke",
    "name": "AlarmSmoke",
    "category": "General",
    "keywords": "alarm smoke"
  },
  {
    "id": "Album",
    "name": "Album",
    "category": "Media",
    "keywords": "album"
  },
  {
    "id": "AlertCircle",
    "name": "AlertCircle",
    "category": "Symbols",
    "keywords": "alert circle"
  },
  {
    "id": "AlertOctagon",
    "name": "AlertOctagon",
    "category": "Symbols",
    "keywords": "alert octagon"
  },
  {
    "id": "AlertTriangle",
    "name": "AlertTriangle",
    "category": "Symbols",
    "keywords": "alert triangle"
  },
  {
    "id": "AlignCenter",
    "name": "AlignCenter",
    "category": "General",
    "keywords": "align center"
  },
  {
    "id": "AlignCenterHorizontal",
    "name": "AlignCenterHorizontal",
    "category": "General",
    "keywords": "align center horizontal"
  },
  {
    "id": "AlignCenterVertical",
    "name": "AlignCenterVertical",
    "category": "General",
    "keywords": "align center vertical"
  },
  {
    "id": "AlignEndHorizontal",
    "name": "AlignEndHorizontal",
    "category": "General",
    "keywords": "align end horizontal"
  },
  {
    "id": "AlignEndVertical",
    "name": "AlignEndVertical",
    "category": "General",
    "keywords": "align end vertical"
  },
  {
    "id": "AlignHorizontalDistributeCenter",
    "name": "AlignHorizontalDistributeCenter",
    "category": "General",
    "keywords": "align horizontal distribute center"
  },
  {
    "id": "AlignHorizontalDistributeEnd",
    "name": "AlignHorizontalDistributeEnd",
    "category": "General",
    "keywords": "align horizontal distribute end"
  },
  {
    "id": "AlignHorizontalDistributeStart",
    "name": "AlignHorizontalDistributeStart",
    "category": "Design",
    "keywords": "align horizontal distribute start"
  },
  {
    "id": "AlignHorizontalJustifyCenter",
    "name": "AlignHorizontalJustifyCenter",
    "category": "General",
    "keywords": "align horizontal justify center"
  },
  {
    "id": "AlignHorizontalJustifyEnd",
    "name": "AlignHorizontalJustifyEnd",
    "category": "General",
    "keywords": "align horizontal justify end"
  },
  {
    "id": "AlignHorizontalJustifyStart",
    "name": "AlignHorizontalJustifyStart",
    "category": "Design",
    "keywords": "align horizontal justify start"
  },
  {
    "id": "AlignHorizontalSpaceAround",
    "name": "AlignHorizontalSpaceAround",
    "category": "General",
    "keywords": "align horizontal space around"
  },
  {
    "id": "AlignHorizontalSpaceBetween",
    "name": "AlignHorizontalSpaceBetween",
    "category": "General",
    "keywords": "align horizontal space between"
  },
  {
    "id": "AlignJustify",
    "name": "AlignJustify",
    "category": "General",
    "keywords": "align justify"
  },
  {
    "id": "AlignLeft",
    "name": "AlignLeft",
    "category": "General",
    "keywords": "align left"
  },
  {
    "id": "AlignRight",
    "name": "AlignRight",
    "category": "General",
    "keywords": "align right"
  },
  {
    "id": "AlignStartHorizontal",
    "name": "AlignStartHorizontal",
    "category": "Design",
    "keywords": "align start horizontal"
  },
  {
    "id": "AlignStartVertical",
    "name": "AlignStartVertical",
    "category": "Media",
    "keywords": "align start vertical"
  },
  {
    "id": "AlignVerticalDistributeCenter",
    "name": "AlignVerticalDistributeCenter",
    "category": "General",
    "keywords": "align vertical distribute center"
  },
  {
    "id": "AlignVerticalDistributeEnd",
    "name": "AlignVerticalDistributeEnd",
    "category": "General",
    "keywords": "align vertical distribute end"
  },
  {
    "id": "AlignVerticalDistributeStart",
    "name": "AlignVerticalDistributeStart",
    "category": "Design",
    "keywords": "align vertical distribute start"
  },
  {
    "id": "AlignVerticalJustifyCenter",
    "name": "AlignVerticalJustifyCenter",
    "category": "General",
    "keywords": "align vertical justify center"
  },
  {
    "id": "AlignVerticalJustifyEnd",
    "name": "AlignVerticalJustifyEnd",
    "category": "General",
    "keywords": "align vertical justify end"
  },
  {
    "id": "AlignVerticalJustifyStart",
    "name": "AlignVerticalJustifyStart",
    "category": "Design",
    "keywords": "align vertical justify start"
  },
  {
    "id": "AlignVerticalSpaceAround",
    "name": "AlignVerticalSpaceAround",
    "category": "General",
    "keywords": "align vertical space around"
  },
  {
    "id": "AlignVerticalSpaceBetween",
    "name": "AlignVerticalSpaceBetween",
    "category": "General",
    "keywords": "align vertical space between"
  },
  {
    "id": "Ambulance",
    "name": "Ambulance",
    "category": "General",
    "keywords": "ambulance"
  },
  {
    "id": "Ampersand",
    "name": "Ampersand",
    "category": "General",
    "keywords": "ampersand"
  },
  {
    "id": "Ampersands",
    "name": "Ampersands",
    "category": "General",
    "keywords": "ampersands"
  },
  {
    "id": "Amphora",
    "name": "Amphora",
    "category": "General",
    "keywords": "amphora"
  },
  {
    "id": "Anchor",
    "name": "Anchor",
    "category": "General",
    "keywords": "anchor"
  },
  {
    "id": "Angry",
    "name": "Angry",
    "category": "General",
    "keywords": "angry"
  },
  {
    "id": "Annoyed",
    "name": "Annoyed",
    "category": "General",
    "keywords": "annoyed"
  },
  {
    "id": "Antenna",
    "name": "Antenna",
    "category": "General",
    "keywords": "antenna"
  },
  {
    "id": "Anvil",
    "name": "Anvil",
    "category": "General",
    "keywords": "anvil"
  },
  {
    "id": "Aperture",
    "name": "Aperture",
    "category": "General",
    "keywords": "aperture"
  },
  {
    "id": "AppWindow",
    "name": "AppWindow",
    "category": "General",
    "keywords": "app window"
  },
  {
    "id": "AppWindowMac",
    "name": "AppWindowMac",
    "category": "General",
    "keywords": "app window mac"
  },
  {
    "id": "Apple",
    "name": "Apple",
    "category": "General",
    "keywords": "apple"
  },
  {
    "id": "Archive",
    "name": "Archive",
    "category": "General",
    "keywords": "archive"
  },
  {
    "id": "ArchiveRestore",
    "name": "ArchiveRestore",
    "category": "General",
    "keywords": "archive restore"
  },
  {
    "id": "ArchiveX",
    "name": "ArchiveX",
    "category": "General",
    "keywords": "archive x"
  },
  {
    "id": "AreaChart",
    "name": "AreaChart",
    "category": "Design",
    "keywords": "area chart"
  },
  {
    "id": "Armchair",
    "name": "Armchair",
    "category": "General",
    "keywords": "armchair"
  },
  {
    "id": "ArrowBigDown",
    "name": "ArrowBigDown",
    "category": "Navigation",
    "keywords": "arrow big down"
  },
  {
    "id": "ArrowBigDownDash",
    "name": "ArrowBigDownDash",
    "category": "Navigation",
    "keywords": "arrow big down dash"
  },
  {
    "id": "ArrowBigLeft",
    "name": "ArrowBigLeft",
    "category": "Navigation",
    "keywords": "arrow big left"
  },
  {
    "id": "ArrowBigLeftDash",
    "name": "ArrowBigLeftDash",
    "category": "Navigation",
    "keywords": "arrow big left dash"
  },
  {
    "id": "ArrowBigRight",
    "name": "ArrowBigRight",
    "category": "Navigation",
    "keywords": "arrow big right"
  },
  {
    "id": "ArrowBigRightDash",
    "name": "ArrowBigRightDash",
    "category": "Navigation",
    "keywords": "arrow big right dash"
  },
  {
    "id": "ArrowBigUp",
    "name": "ArrowBigUp",
    "category": "Navigation",
    "keywords": "arrow big up"
  },
  {
    "id": "ArrowBigUpDash",
    "name": "ArrowBigUpDash",
    "category": "Navigation",
    "keywords": "arrow big up dash"
  },
  {
    "id": "ArrowDown",
    "name": "ArrowDown",
    "category": "Navigation",
    "keywords": "arrow down"
  },
  {
    "id": "ArrowDown01",
    "name": "ArrowDown01",
    "category": "Navigation",
    "keywords": "arrow down01"
  },
  {
    "id": "ArrowDown10",
    "name": "ArrowDown10",
    "category": "Navigation",
    "keywords": "arrow down10"
  },
  {
    "id": "ArrowDownAZ",
    "name": "ArrowDownAZ",
    "category": "Navigation",
    "keywords": "arrow down a z"
  },
  {
    "id": "ArrowDownAz",
    "name": "ArrowDownAz",
    "category": "Navigation",
    "keywords": "arrow down az"
  },
  {
    "id": "ArrowDownCircle",
    "name": "ArrowDownCircle",
    "category": "Navigation",
    "keywords": "arrow down circle"
  },
  {
    "id": "ArrowDownFromLine",
    "name": "ArrowDownFromLine",
    "category": "Navigation",
    "keywords": "arrow down from line"
  },
  {
    "id": "ArrowDownLeft",
    "name": "ArrowDownLeft",
    "category": "Navigation",
    "keywords": "arrow down left"
  },
  {
    "id": "ArrowDownLeftFromCircle",
    "name": "ArrowDownLeftFromCircle",
    "category": "Navigation",
    "keywords": "arrow down left from circle"
  },
  {
    "id": "ArrowDownLeftFromSquare",
    "name": "ArrowDownLeftFromSquare",
    "category": "Navigation",
    "keywords": "arrow down left from square"
  },
  {
    "id": "ArrowDownLeftSquare",
    "name": "ArrowDownLeftSquare",
    "category": "Navigation",
    "keywords": "arrow down left square"
  },
  {
    "id": "ArrowDownNarrowWide",
    "name": "ArrowDownNarrowWide",
    "category": "Navigation",
    "keywords": "arrow down narrow wide"
  },
  {
    "id": "ArrowDownRight",
    "name": "ArrowDownRight",
    "category": "Navigation",
    "keywords": "arrow down right"
  },
  {
    "id": "ArrowDownRightFromCircle",
    "name": "ArrowDownRightFromCircle",
    "category": "Navigation",
    "keywords": "arrow down right from circle"
  },
  {
    "id": "ArrowDownRightFromSquare",
    "name": "ArrowDownRightFromSquare",
    "category": "Navigation",
    "keywords": "arrow down right from square"
  },
  {
    "id": "ArrowDownRightSquare",
    "name": "ArrowDownRightSquare",
    "category": "Navigation",
    "keywords": "arrow down right square"
  },
  {
    "id": "ArrowDownSquare",
    "name": "ArrowDownSquare",
    "category": "Navigation",
    "keywords": "arrow down square"
  },
  {
    "id": "ArrowDownToDot",
    "name": "ArrowDownToDot",
    "category": "Navigation",
    "keywords": "arrow down to dot"
  },
  {
    "id": "ArrowDownToLine",
    "name": "ArrowDownToLine",
    "category": "Navigation",
    "keywords": "arrow down to line"
  },
  {
    "id": "ArrowDownUp",
    "name": "ArrowDownUp",
    "category": "Navigation",
    "keywords": "arrow down up"
  },
  {
    "id": "ArrowDownWideNarrow",
    "name": "ArrowDownWideNarrow",
    "category": "Navigation",
    "keywords": "arrow down wide narrow"
  },
  {
    "id": "ArrowDownZA",
    "name": "ArrowDownZA",
    "category": "Navigation",
    "keywords": "arrow down z a"
  },
  {
    "id": "ArrowDownZa",
    "name": "ArrowDownZa",
    "category": "Navigation",
    "keywords": "arrow down za"
  },
  {
    "id": "ArrowLeft",
    "name": "ArrowLeft",
    "category": "Navigation",
    "keywords": "arrow left"
  },
  {
    "id": "ArrowLeftCircle",
    "name": "ArrowLeftCircle",
    "category": "Navigation",
    "keywords": "arrow left circle"
  },
  {
    "id": "ArrowLeftFromLine",
    "name": "ArrowLeftFromLine",
    "category": "Navigation",
    "keywords": "arrow left from line"
  },
  {
    "id": "ArrowLeftRight",
    "name": "ArrowLeftRight",
    "category": "Navigation",
    "keywords": "arrow left right"
  },
  {
    "id": "ArrowLeftSquare",
    "name": "ArrowLeftSquare",
    "category": "Navigation",
    "keywords": "arrow left square"
  },
  {
    "id": "ArrowLeftToLine",
    "name": "ArrowLeftToLine",
    "category": "Navigation",
    "keywords": "arrow left to line"
  },
  {
    "id": "ArrowRight",
    "name": "ArrowRight",
    "category": "Navigation",
    "keywords": "arrow right"
  },
  {
    "id": "ArrowRightCircle",
    "name": "ArrowRightCircle",
    "category": "Navigation",
    "keywords": "arrow right circle"
  },
  {
    "id": "ArrowRightFromLine",
    "name": "ArrowRightFromLine",
    "category": "Navigation",
    "keywords": "arrow right from line"
  },
  {
    "id": "ArrowRightLeft",
    "name": "ArrowRightLeft",
    "category": "Navigation",
    "keywords": "arrow right left"
  },
  {
    "id": "ArrowRightSquare",
    "name": "ArrowRightSquare",
    "category": "Navigation",
    "keywords": "arrow right square"
  },
  {
    "id": "ArrowRightToLine",
    "name": "ArrowRightToLine",
    "category": "Navigation",
    "keywords": "arrow right to line"
  },
  {
    "id": "ArrowUp",
    "name": "ArrowUp",
    "category": "Navigation",
    "keywords": "arrow up"
  },
  {
    "id": "ArrowUp01",
    "name": "ArrowUp01",
    "category": "Navigation",
    "keywords": "arrow up01"
  },
  {
    "id": "ArrowUp10",
    "name": "ArrowUp10",
    "category": "Navigation",
    "keywords": "arrow up10"
  },
  {
    "id": "ArrowUpAZ",
    "name": "ArrowUpAZ",
    "category": "Navigation",
    "keywords": "arrow up a z"
  },
  {
    "id": "ArrowUpAz",
    "name": "ArrowUpAz",
    "category": "Navigation",
    "keywords": "arrow up az"
  },
  {
    "id": "ArrowUpCircle",
    "name": "ArrowUpCircle",
    "category": "Navigation",
    "keywords": "arrow up circle"
  },
  {
    "id": "ArrowUpDown",
    "name": "ArrowUpDown",
    "category": "Navigation",
    "keywords": "arrow up down"
  },
  {
    "id": "ArrowUpFromDot",
    "name": "ArrowUpFromDot",
    "category": "Navigation",
    "keywords": "arrow up from dot"
  },
  {
    "id": "ArrowUpFromLine",
    "name": "ArrowUpFromLine",
    "category": "Navigation",
    "keywords": "arrow up from line"
  },
  {
    "id": "ArrowUpLeft",
    "name": "ArrowUpLeft",
    "category": "Navigation",
    "keywords": "arrow up left"
  },
  {
    "id": "ArrowUpLeftFromCircle",
    "name": "ArrowUpLeftFromCircle",
    "category": "Navigation",
    "keywords": "arrow up left from circle"
  },
  {
    "id": "ArrowUpLeftFromSquare",
    "name": "ArrowUpLeftFromSquare",
    "category": "Navigation",
    "keywords": "arrow up left from square"
  },
  {
    "id": "ArrowUpLeftSquare",
    "name": "ArrowUpLeftSquare",
    "category": "Navigation",
    "keywords": "arrow up left square"
  },
  {
    "id": "ArrowUpNarrowWide",
    "name": "ArrowUpNarrowWide",
    "category": "Navigation",
    "keywords": "arrow up narrow wide"
  },
  {
    "id": "ArrowUpRight",
    "name": "ArrowUpRight",
    "category": "Navigation",
    "keywords": "arrow up right"
  },
  {
    "id": "ArrowUpRightFromCircle",
    "name": "ArrowUpRightFromCircle",
    "category": "Navigation",
    "keywords": "arrow up right from circle"
  },
  {
    "id": "ArrowUpRightFromSquare",
    "name": "ArrowUpRightFromSquare",
    "category": "Navigation",
    "keywords": "arrow up right from square"
  },
  {
    "id": "ArrowUpRightSquare",
    "name": "ArrowUpRightSquare",
    "category": "Navigation",
    "keywords": "arrow up right square"
  },
  {
    "id": "ArrowUpSquare",
    "name": "ArrowUpSquare",
    "category": "Navigation",
    "keywords": "arrow up square"
  },
  {
    "id": "ArrowUpToLine",
    "name": "ArrowUpToLine",
    "category": "Navigation",
    "keywords": "arrow up to line"
  },
  {
    "id": "ArrowUpWideNarrow",
    "name": "ArrowUpWideNarrow",
    "category": "Navigation",
    "keywords": "arrow up wide narrow"
  },
  {
    "id": "ArrowUpZA",
    "name": "ArrowUpZA",
    "category": "Navigation",
    "keywords": "arrow up z a"
  },
  {
    "id": "ArrowUpZa",
    "name": "ArrowUpZa",
    "category": "Navigation",
    "keywords": "arrow up za"
  },
  {
    "id": "ArrowsUpFromLine",
    "name": "ArrowsUpFromLine",
    "category": "Navigation",
    "keywords": "arrows up from line"
  },
  {
    "id": "Asterisk",
    "name": "Asterisk",
    "category": "General",
    "keywords": "asterisk"
  },
  {
    "id": "AsteriskSquare",
    "name": "AsteriskSquare",
    "category": "General",
    "keywords": "asterisk square"
  },
  {
    "id": "AtSign",
    "name": "AtSign",
    "category": "General",
    "keywords": "at sign"
  },
  {
    "id": "Atom",
    "name": "Atom",
    "category": "General",
    "keywords": "atom"
  },
  {
    "id": "AudioLines",
    "name": "AudioLines",
    "category": "Media",
    "keywords": "audio lines"
  },
  {
    "id": "AudioWaveform",
    "name": "AudioWaveform",
    "category": "Media",
    "keywords": "audio waveform"
  },
  {
    "id": "Award",
    "name": "Award",
    "category": "General",
    "keywords": "award"
  },
  {
    "id": "Axe",
    "name": "Axe",
    "category": "General",
    "keywords": "axe"
  },
  {
    "id": "Axis3D",
    "name": "Axis3D",
    "category": "General",
    "keywords": "axis3 d"
  },
  {
    "id": "Axis3d",
    "name": "Axis3d",
    "category": "General",
    "keywords": "axis3d"
  },
  {
    "id": "Baby",
    "name": "Baby",
    "category": "General",
    "keywords": "baby"
  },
  {
    "id": "Backpack",
    "name": "Backpack",
    "category": "General",
    "keywords": "backpack"
  },
  {
    "id": "Badge",
    "name": "Badge",
    "category": "General",
    "keywords": "badge"
  },
  {
    "id": "BadgeAlert",
    "name": "BadgeAlert",
    "category": "Symbols",
    "keywords": "badge alert"
  },
  {
    "id": "BadgeCent",
    "name": "BadgeCent",
    "category": "General",
    "keywords": "badge cent"
  },
  {
    "id": "BadgeCheck",
    "name": "BadgeCheck",
    "category": "Symbols",
    "keywords": "badge check"
  },
  {
    "id": "BadgeDollarSign",
    "name": "BadgeDollarSign",
    "category": "General",
    "keywords": "badge dollar sign"
  },
  {
    "id": "BadgeEuro",
    "name": "BadgeEuro",
    "category": "General",
    "keywords": "badge euro"
  },
  {
    "id": "BadgeHelp",
    "name": "BadgeHelp",
    "category": "Symbols",
    "keywords": "badge help"
  },
  {
    "id": "BadgeIndianRupee",
    "name": "BadgeIndianRupee",
    "category": "General",
    "keywords": "badge indian rupee"
  },
  {
    "id": "BadgeInfo",
    "name": "BadgeInfo",
    "category": "Symbols",
    "keywords": "badge info"
  },
  {
    "id": "BadgeJapaneseYen",
    "name": "BadgeJapaneseYen",
    "category": "Symbols",
    "keywords": "badge japanese yen"
  },
  {
    "id": "BadgeMinus",
    "name": "BadgeMinus",
    "category": "Symbols",
    "keywords": "badge minus"
  },
  {
    "id": "BadgePercent",
    "name": "BadgePercent",
    "category": "General",
    "keywords": "badge percent"
  },
  {
    "id": "BadgePlus",
    "name": "BadgePlus",
    "category": "Symbols",
    "keywords": "badge plus"
  },
  {
    "id": "BadgePoundSterling",
    "name": "BadgePoundSterling",
    "category": "General",
    "keywords": "badge pound sterling"
  },
  {
    "id": "BadgeQuestionMark",
    "name": "BadgeQuestionMark",
    "category": "General",
    "keywords": "badge question mark"
  },
  {
    "id": "BadgeRussianRuble",
    "name": "BadgeRussianRuble",
    "category": "General",
    "keywords": "badge russian ruble"
  },
  {
    "id": "BadgeSwissFranc",
    "name": "BadgeSwissFranc",
    "category": "General",
    "keywords": "badge swiss franc"
  },
  {
    "id": "BadgeTurkishLira",
    "name": "BadgeTurkishLira",
    "category": "General",
    "keywords": "badge turkish lira"
  },
  {
    "id": "BadgeX",
    "name": "BadgeX",
    "category": "General",
    "keywords": "badge x"
  },
  {
    "id": "BaggageClaim",
    "name": "BaggageClaim",
    "category": "General",
    "keywords": "baggage claim"
  },
  {
    "id": "Ban",
    "name": "Ban",
    "category": "General",
    "keywords": "ban"
  },
  {
    "id": "Banana",
    "name": "Banana",
    "category": "General",
    "keywords": "banana"
  },
  {
    "id": "Bandage",
    "name": "Bandage",
    "category": "General",
    "keywords": "bandage"
  },
  {
    "id": "Banknote",
    "name": "Banknote",
    "category": "General",
    "keywords": "banknote"
  },
  {
    "id": "BanknoteArrowDown",
    "name": "BanknoteArrowDown",
    "category": "Navigation",
    "keywords": "banknote arrow down"
  },
  {
    "id": "BanknoteArrowUp",
    "name": "BanknoteArrowUp",
    "category": "Navigation",
    "keywords": "banknote arrow up"
  },
  {
    "id": "BanknoteX",
    "name": "BanknoteX",
    "category": "General",
    "keywords": "banknote x"
  },
  {
    "id": "BarChart",
    "name": "BarChart",
    "category": "Design",
    "keywords": "bar chart"
  },
  {
    "id": "BarChart2",
    "name": "BarChart2",
    "category": "Design",
    "keywords": "bar chart2"
  },
  {
    "id": "BarChart3",
    "name": "BarChart3",
    "category": "Design",
    "keywords": "bar chart3"
  },
  {
    "id": "BarChart4",
    "name": "BarChart4",
    "category": "Design",
    "keywords": "bar chart4"
  },
  {
    "id": "BarChartBig",
    "name": "BarChartBig",
    "category": "Design",
    "keywords": "bar chart big"
  },
  {
    "id": "BarChartHorizontal",
    "name": "BarChartHorizontal",
    "category": "Design",
    "keywords": "bar chart horizontal"
  },
  {
    "id": "BarChartHorizontalBig",
    "name": "BarChartHorizontalBig",
    "category": "Design",
    "keywords": "bar chart horizontal big"
  },
  {
    "id": "Barcode",
    "name": "Barcode",
    "category": "System",
    "keywords": "barcode"
  },
  {
    "id": "Barrel",
    "name": "Barrel",
    "category": "General",
    "keywords": "barrel"
  },
  {
    "id": "Baseline",
    "name": "Baseline",
    "category": "General",
    "keywords": "baseline"
  },
  {
    "id": "Bath",
    "name": "Bath",
    "category": "General",
    "keywords": "bath"
  },
  {
    "id": "Battery",
    "name": "Battery",
    "category": "Devices",
    "keywords": "battery"
  },
  {
    "id": "BatteryCharging",
    "name": "BatteryCharging",
    "category": "Devices",
    "keywords": "battery charging"
  },
  {
    "id": "BatteryFull",
    "name": "BatteryFull",
    "category": "Devices",
    "keywords": "battery full"
  },
  {
    "id": "BatteryLow",
    "name": "BatteryLow",
    "category": "Devices",
    "keywords": "battery low"
  },
  {
    "id": "BatteryMedium",
    "name": "BatteryMedium",
    "category": "Devices",
    "keywords": "battery medium"
  },
  {
    "id": "BatteryPlus",
    "name": "BatteryPlus",
    "category": "Devices",
    "keywords": "battery plus"
  },
  {
    "id": "BatteryWarning",
    "name": "BatteryWarning",
    "category": "Devices",
    "keywords": "battery warning"
  },
  {
    "id": "Beaker",
    "name": "Beaker",
    "category": "General",
    "keywords": "beaker"
  },
  {
    "id": "Bean",
    "name": "Bean",
    "category": "General",
    "keywords": "bean"
  },
  {
    "id": "BeanOff",
    "name": "BeanOff",
    "category": "General",
    "keywords": "bean off"
  },
  {
    "id": "Bed",
    "name": "Bed",
    "category": "General",
    "keywords": "bed"
  },
  {
    "id": "BedDouble",
    "name": "BedDouble",
    "category": "General",
    "keywords": "bed double"
  },
  {
    "id": "BedSingle",
    "name": "BedSingle",
    "category": "General",
    "keywords": "bed single"
  },
  {
    "id": "Beef",
    "name": "Beef",
    "category": "General",
    "keywords": "beef"
  },
  {
    "id": "Beer",
    "name": "Beer",
    "category": "General",
    "keywords": "beer"
  },
  {
    "id": "BeerOff",
    "name": "BeerOff",
    "category": "General",
    "keywords": "beer off"
  },
  {
    "id": "Bell",
    "name": "Bell",
    "category": "Symbols",
    "keywords": "bell"
  },
  {
    "id": "BellDot",
    "name": "BellDot",
    "category": "Symbols",
    "keywords": "bell dot"
  },
  {
    "id": "BellElectric",
    "name": "BellElectric",
    "category": "Symbols",
    "keywords": "bell electric"
  },
  {
    "id": "BellMinus",
    "name": "BellMinus",
    "category": "Symbols",
    "keywords": "bell minus"
  },
  {
    "id": "BellOff",
    "name": "BellOff",
    "category": "Symbols",
    "keywords": "bell off"
  },
  {
    "id": "BellPlus",
    "name": "BellPlus",
    "category": "Symbols",
    "keywords": "bell plus"
  },
  {
    "id": "BellRing",
    "name": "BellRing",
    "category": "Symbols",
    "keywords": "bell ring"
  },
  {
    "id": "BetweenHorizonalEnd",
    "name": "BetweenHorizonalEnd",
    "category": "General",
    "keywords": "between horizonal end"
  },
  {
    "id": "BetweenHorizonalStart",
    "name": "BetweenHorizonalStart",
    "category": "Design",
    "keywords": "between horizonal start"
  },
  {
    "id": "BetweenHorizontalEnd",
    "name": "BetweenHorizontalEnd",
    "category": "General",
    "keywords": "between horizontal end"
  },
  {
    "id": "BetweenHorizontalStart",
    "name": "BetweenHorizontalStart",
    "category": "Design",
    "keywords": "between horizontal start"
  },
  {
    "id": "BetweenVerticalEnd",
    "name": "BetweenVerticalEnd",
    "category": "General",
    "keywords": "between vertical end"
  },
  {
    "id": "BetweenVerticalStart",
    "name": "BetweenVerticalStart",
    "category": "Design",
    "keywords": "between vertical start"
  },
  {
    "id": "BicepsFlexed",
    "name": "BicepsFlexed",
    "category": "General",
    "keywords": "biceps flexed"
  },
  {
    "id": "Bike",
    "name": "Bike",
    "category": "General",
    "keywords": "bike"
  },
  {
    "id": "Binary",
    "name": "Binary",
    "category": "System",
    "keywords": "binary"
  },
  {
    "id": "Binoculars",
    "name": "Binoculars",
    "category": "General",
    "keywords": "binoculars"
  },
  {
    "id": "Biohazard",
    "name": "Biohazard",
    "category": "General",
    "keywords": "biohazard"
  },
  {
    "id": "Bird",
    "name": "Bird",
    "category": "General",
    "keywords": "bird"
  },
  {
    "id": "Bitcoin",
    "name": "Bitcoin",
    "category": "General",
    "keywords": "bitcoin"
  },
  {
    "id": "Blend",
    "name": "Blend",
    "category": "Design",
    "keywords": "blend"
  },
  {
    "id": "Blinds",
    "name": "Blinds",
    "category": "General",
    "keywords": "blinds"
  },
  {
    "id": "Blocks",
    "name": "Blocks",
    "category": "System",
    "keywords": "blocks"
  },
  {
    "id": "Bluetooth",
    "name": "Bluetooth",
    "category": "Devices",
    "keywords": "bluetooth"
  },
  {
    "id": "BluetoothConnected",
    "name": "BluetoothConnected",
    "category": "Devices",
    "keywords": "bluetooth connected"
  },
  {
    "id": "BluetoothOff",
    "name": "BluetoothOff",
    "category": "Devices",
    "keywords": "bluetooth off"
  },
  {
    "id": "BluetoothSearching",
    "name": "BluetoothSearching",
    "category": "Devices",
    "keywords": "bluetooth searching"
  },
  {
    "id": "Bold",
    "name": "Bold",
    "category": "General",
    "keywords": "bold"
  },
  {
    "id": "Bolt",
    "name": "Bolt",
    "category": "Symbols",
    "keywords": "bolt"
  },
  {
    "id": "Bomb",
    "name": "Bomb",
    "category": "General",
    "keywords": "bomb"
  },
  {
    "id": "Bone",
    "name": "Bone",
    "category": "General",
    "keywords": "bone"
  },
  {
    "id": "Book",
    "name": "Book",
    "category": "General",
    "keywords": "book"
  },
  {
    "id": "BookA",
    "name": "BookA",
    "category": "General",
    "keywords": "book a"
  },
  {
    "id": "BookAlert",
    "name": "BookAlert",
    "category": "Symbols",
    "keywords": "book alert"
  },
  {
    "id": "BookAudio",
    "name": "BookAudio",
    "category": "Media",
    "keywords": "book audio"
  },
  {
    "id": "BookCheck",
    "name": "BookCheck",
    "category": "Symbols",
    "keywords": "book check"
  },
  {
    "id": "BookCopy",
    "name": "BookCopy",
    "category": "Symbols",
    "keywords": "book copy"
  },
  {
    "id": "BookDashed",
    "name": "BookDashed",
    "category": "General",
    "keywords": "book dashed"
  },
  {
    "id": "BookDown",
    "name": "BookDown",
    "category": "General",
    "keywords": "book down"
  },
  {
    "id": "BookHeadphones",
    "name": "BookHeadphones",
    "category": "Media",
    "keywords": "book headphones"
  },
  {
    "id": "BookHeart",
    "name": "BookHeart",
    "category": "Design",
    "keywords": "book heart"
  },
  {
    "id": "BookImage",
    "name": "BookImage",
    "category": "General",
    "keywords": "book image"
  },
  {
    "id": "BookKey",
    "name": "BookKey",
    "category": "System",
    "keywords": "book key"
  },
  {
    "id": "BookLock",
    "name": "BookLock",
    "category": "System",
    "keywords": "book lock"
  },
  {
    "id": "BookMarked",
    "name": "BookMarked",
    "category": "Symbols",
    "keywords": "book marked"
  },
  {
    "id": "BookMinus",
    "name": "BookMinus",
    "category": "Symbols",
    "keywords": "book minus"
  },
  {
    "id": "BookOpen",
    "name": "BookOpen",
    "category": "Design",
    "keywords": "book open"
  },
  {
    "id": "BookOpenCheck",
    "name": "BookOpenCheck",
    "category": "Design",
    "keywords": "book open check"
  },
  {
    "id": "BookOpenText",
    "name": "BookOpenText",
    "category": "Design",
    "keywords": "book open text"
  },
  {
    "id": "BookPlus",
    "name": "BookPlus",
    "category": "Symbols",
    "keywords": "book plus"
  },
  {
    "id": "BookTemplate",
    "name": "BookTemplate",
    "category": "General",
    "keywords": "book template"
  },
  {
    "id": "BookText",
    "name": "BookText",
    "category": "General",
    "keywords": "book text"
  },
  {
    "id": "BookType",
    "name": "BookType",
    "category": "General",
    "keywords": "book type"
  },
  {
    "id": "BookUp",
    "name": "BookUp",
    "category": "General",
    "keywords": "book up"
  },
  {
    "id": "BookUp2",
    "name": "BookUp2",
    "category": "General",
    "keywords": "book up2"
  },
  {
    "id": "BookUser",
    "name": "BookUser",
    "category": "Symbols",
    "keywords": "book user"
  },
  {
    "id": "BookX",
    "name": "BookX",
    "category": "General",
    "keywords": "book x"
  },
  {
    "id": "Bookmark",
    "name": "Bookmark",
    "category": "Symbols",
    "keywords": "bookmark"
  },
  {
    "id": "BookmarkCheck",
    "name": "BookmarkCheck",
    "category": "Symbols",
    "keywords": "bookmark check"
  },
  {
    "id": "BookmarkMinus",
    "name": "BookmarkMinus",
    "category": "Symbols",
    "keywords": "bookmark minus"
  },
  {
    "id": "BookmarkPlus",
    "name": "BookmarkPlus",
    "category": "Symbols",
    "keywords": "bookmark plus"
  },
  {
    "id": "BookmarkX",
    "name": "BookmarkX",
    "category": "Symbols",
    "keywords": "bookmark x"
  },
  {
    "id": "BoomBox",
    "name": "BoomBox",
    "category": "Media",
    "keywords": "boom box"
  },
  {
    "id": "Bot",
    "name": "Bot",
    "category": "General",
    "keywords": "bot"
  },
  {
    "id": "BotMessageSquare",
    "name": "BotMessageSquare",
    "category": "General",
    "keywords": "bot message square"
  },
  {
    "id": "BotOff",
    "name": "BotOff",
    "category": "General",
    "keywords": "bot off"
  },
  {
    "id": "BottleWine",
    "name": "BottleWine",
    "category": "General",
    "keywords": "bottle wine"
  },
  {
    "id": "BowArrow",
    "name": "BowArrow",
    "category": "Navigation",
    "keywords": "bow arrow"
  },
  {
    "id": "Box",
    "name": "Box",
    "category": "General",
    "keywords": "box"
  },
  {
    "id": "BoxSelect",
    "name": "BoxSelect",
    "category": "General",
    "keywords": "box select"
  },
  {
    "id": "Boxes",
    "name": "Boxes",
    "category": "General",
    "keywords": "boxes"
  },
  {
    "id": "Braces",
    "name": "Braces",
    "category": "System",
    "keywords": "braces"
  },
  {
    "id": "Brackets",
    "name": "Brackets",
    "category": "System",
    "keywords": "brackets"
  },
  {
    "id": "Brain",
    "name": "Brain",
    "category": "General",
    "keywords": "brain"
  },
  {
    "id": "BrainCircuit",
    "name": "BrainCircuit",
    "category": "General",
    "keywords": "brain circuit"
  },
  {
    "id": "BrainCog",
    "name": "BrainCog",
    "category": "General",
    "keywords": "brain cog"
  },
  {
    "id": "BrickWall",
    "name": "BrickWall",
    "category": "General",
    "keywords": "brick wall"
  },
  {
    "id": "BrickWallFire",
    "name": "BrickWallFire",
    "category": "Symbols",
    "keywords": "brick wall fire"
  },
  {
    "id": "BrickWallShield",
    "name": "BrickWallShield",
    "category": "System",
    "keywords": "brick wall shield"
  },
  {
    "id": "Briefcase",
    "name": "Briefcase",
    "category": "General",
    "keywords": "briefcase"
  },
  {
    "id": "BriefcaseBusiness",
    "name": "BriefcaseBusiness",
    "category": "General",
    "keywords": "briefcase business"
  },
  {
    "id": "BriefcaseConveyorBelt",
    "name": "BriefcaseConveyorBelt",
    "category": "General",
    "keywords": "briefcase conveyor belt"
  },
  {
    "id": "BriefcaseMedical",
    "name": "BriefcaseMedical",
    "category": "General",
    "keywords": "briefcase medical"
  },
  {
    "id": "BringToFront",
    "name": "BringToFront",
    "category": "General",
    "keywords": "bring to front"
  },
  {
    "id": "Brush",
    "name": "Brush",
    "category": "Design",
    "keywords": "brush"
  },
  {
    "id": "BrushCleaning",
    "name": "BrushCleaning",
    "category": "Design",
    "keywords": "brush cleaning"
  },
  {
    "id": "Bubbles",
    "name": "Bubbles",
    "category": "General",
    "keywords": "bubbles"
  },
  {
    "id": "Bug",
    "name": "Bug",
    "category": "System",
    "keywords": "bug"
  },
  {
    "id": "BugOff",
    "name": "BugOff",
    "category": "System",
    "keywords": "bug off"
  },
  {
    "id": "BugPlay",
    "name": "BugPlay",
    "category": "Media",
    "keywords": "bug play"
  },
  {
    "id": "Building",
    "name": "Building",
    "category": "General",
    "keywords": "building"
  },
  {
    "id": "Building2",
    "name": "Building2",
    "category": "General",
    "keywords": "building2"
  },
  {
    "id": "Bus",
    "name": "Bus",
    "category": "General",
    "keywords": "bus"
  },
  {
    "id": "BusFront",
    "name": "BusFront",
    "category": "General",
    "keywords": "bus front"
  },
  {
    "id": "Cable",
    "name": "Cable",
    "category": "Devices",
    "keywords": "cable"
  },
  {
    "id": "CableCar",
    "name": "CableCar",
    "category": "Devices",
    "keywords": "cable car"
  },
  {
    "id": "Cake",
    "name": "Cake",
    "category": "General",
    "keywords": "cake"
  },
  {
    "id": "CakeSlice",
    "name": "CakeSlice",
    "category": "General",
    "keywords": "cake slice"
  },
  {
    "id": "Calculator",
    "name": "Calculator",
    "category": "General",
    "keywords": "calculator"
  },
  {
    "id": "Calendar",
    "name": "Calendar",
    "category": "General",
    "keywords": "calendar"
  },
  {
    "id": "Calendar1",
    "name": "Calendar1",
    "category": "General",
    "keywords": "calendar1"
  },
  {
    "id": "CalendarArrowDown",
    "name": "CalendarArrowDown",
    "category": "Navigation",
    "keywords": "calendar arrow down"
  },
  {
    "id": "CalendarArrowUp",
    "name": "CalendarArrowUp",
    "category": "Navigation",
    "keywords": "calendar arrow up"
  },
  {
    "id": "CalendarCheck",
    "name": "CalendarCheck",
    "category": "Symbols",
    "keywords": "calendar check"
  },
  {
    "id": "CalendarCheck2",
    "name": "CalendarCheck2",
    "category": "Symbols",
    "keywords": "calendar check2"
  },
  {
    "id": "CalendarClock",
    "name": "CalendarClock",
    "category": "System",
    "keywords": "calendar clock"
  },
  {
    "id": "CalendarCog",
    "name": "CalendarCog",
    "category": "General",
    "keywords": "calendar cog"
  },
  {
    "id": "CalendarDays",
    "name": "CalendarDays",
    "category": "General",
    "keywords": "calendar days"
  },
  {
    "id": "CalendarFold",
    "name": "CalendarFold",
    "category": "General",
    "keywords": "calendar fold"
  },
  {
    "id": "CalendarHeart",
    "name": "CalendarHeart",
    "category": "Design",
    "keywords": "calendar heart"
  },
  {
    "id": "CalendarMinus",
    "name": "CalendarMinus",
    "category": "Symbols",
    "keywords": "calendar minus"
  },
  {
    "id": "CalendarMinus2",
    "name": "CalendarMinus2",
    "category": "Symbols",
    "keywords": "calendar minus2"
  },
  {
    "id": "CalendarOff",
    "name": "CalendarOff",
    "category": "General",
    "keywords": "calendar off"
  },
  {
    "id": "CalendarPlus",
    "name": "CalendarPlus",
    "category": "Symbols",
    "keywords": "calendar plus"
  },
  {
    "id": "CalendarPlus2",
    "name": "CalendarPlus2",
    "category": "Symbols",
    "keywords": "calendar plus2"
  },
  {
    "id": "CalendarRange",
    "name": "CalendarRange",
    "category": "General",
    "keywords": "calendar range"
  },
  {
    "id": "CalendarSearch",
    "name": "CalendarSearch",
    "category": "Symbols",
    "keywords": "calendar search"
  },
  {
    "id": "CalendarSync",
    "name": "CalendarSync",
    "category": "General",
    "keywords": "calendar sync"
  },
  {
    "id": "CalendarX",
    "name": "CalendarX",
    "category": "General",
    "keywords": "calendar x"
  },
  {
    "id": "CalendarX2",
    "name": "CalendarX2",
    "category": "General",
    "keywords": "calendar x2"
  },
  {
    "id": "Camera",
    "name": "Camera",
    "category": "General",
    "keywords": "camera"
  },
  {
    "id": "CameraOff",
    "name": "CameraOff",
    "category": "General",
    "keywords": "camera off"
  },
  {
    "id": "CandlestickChart",
    "name": "CandlestickChart",
    "category": "Design",
    "keywords": "candlestick chart"
  },
  {
    "id": "Candy",
    "name": "Candy",
    "category": "General",
    "keywords": "candy"
  },
  {
    "id": "CandyCane",
    "name": "CandyCane",
    "category": "General",
    "keywords": "candy cane"
  },
  {
    "id": "CandyOff",
    "name": "CandyOff",
    "category": "General",
    "keywords": "candy off"
  },
  {
    "id": "Cannabis",
    "name": "Cannabis",
    "category": "General",
    "keywords": "cannabis"
  },
  {
    "id": "Captions",
    "name": "Captions",
    "category": "General",
    "keywords": "captions"
  },
  {
    "id": "CaptionsOff",
    "name": "CaptionsOff",
    "category": "General",
    "keywords": "captions off"
  },
  {
    "id": "Car",
    "name": "Car",
    "category": "General",
    "keywords": "car"
  },
  {
    "id": "CarFront",
    "name": "CarFront",
    "category": "General",
    "keywords": "car front"
  },
  {
    "id": "CarTaxiFront",
    "name": "CarTaxiFront",
    "category": "Design",
    "keywords": "car taxi front"
  },
  {
    "id": "Caravan",
    "name": "Caravan",
    "category": "General",
    "keywords": "caravan"
  },
  {
    "id": "CardSim",
    "name": "CardSim",
    "category": "General",
    "keywords": "card sim"
  },
  {
    "id": "Carrot",
    "name": "Carrot",
    "category": "General",
    "keywords": "carrot"
  },
  {
    "id": "CaseLower",
    "name": "CaseLower",
    "category": "General",
    "keywords": "case lower"
  },
  {
    "id": "CaseSensitive",
    "name": "CaseSensitive",
    "category": "General",
    "keywords": "case sensitive"
  },
  {
    "id": "CaseUpper",
    "name": "CaseUpper",
    "category": "General",
    "keywords": "case upper"
  },
  {
    "id": "CassetteTape",
    "name": "CassetteTape",
    "category": "Media",
    "keywords": "cassette tape"
  },
  {
    "id": "Cast",
    "name": "Cast",
    "category": "General",
    "keywords": "cast"
  },
  {
    "id": "Castle",
    "name": "Castle",
    "category": "General",
    "keywords": "castle"
  },
  {
    "id": "Cat",
    "name": "Cat",
    "category": "General",
    "keywords": "cat"
  },
  {
    "id": "Cctv",
    "name": "Cctv",
    "category": "Media",
    "keywords": "cctv"
  },
  {
    "id": "ChartArea",
    "name": "ChartArea",
    "category": "Design",
    "keywords": "chart area"
  },
  {
    "id": "ChartBar",
    "name": "ChartBar",
    "category": "Design",
    "keywords": "chart bar"
  },
  {
    "id": "ChartBarBig",
    "name": "ChartBarBig",
    "category": "Design",
    "keywords": "chart bar big"
  },
  {
    "id": "ChartBarDecreasing",
    "name": "ChartBarDecreasing",
    "category": "Design",
    "keywords": "chart bar decreasing"
  },
  {
    "id": "ChartBarIncreasing",
    "name": "ChartBarIncreasing",
    "category": "Design",
    "keywords": "chart bar increasing"
  },
  {
    "id": "ChartBarStacked",
    "name": "ChartBarStacked",
    "category": "Design",
    "keywords": "chart bar stacked"
  },
  {
    "id": "ChartCandlestick",
    "name": "ChartCandlestick",
    "category": "Design",
    "keywords": "chart candlestick"
  },
  {
    "id": "ChartColumn",
    "name": "ChartColumn",
    "category": "Design",
    "keywords": "chart column"
  },
  {
    "id": "ChartColumnBig",
    "name": "ChartColumnBig",
    "category": "Design",
    "keywords": "chart column big"
  },
  {
    "id": "ChartColumnDecreasing",
    "name": "ChartColumnDecreasing",
    "category": "Design",
    "keywords": "chart column decreasing"
  },
  {
    "id": "ChartColumnIncreasing",
    "name": "ChartColumnIncreasing",
    "category": "Design",
    "keywords": "chart column increasing"
  },
  {
    "id": "ChartColumnStacked",
    "name": "ChartColumnStacked",
    "category": "Design",
    "keywords": "chart column stacked"
  },
  {
    "id": "ChartGantt",
    "name": "ChartGantt",
    "category": "Design",
    "keywords": "chart gantt"
  },
  {
    "id": "ChartLine",
    "name": "ChartLine",
    "category": "Design",
    "keywords": "chart line"
  },
  {
    "id": "ChartNetwork",
    "name": "ChartNetwork",
    "category": "Design",
    "keywords": "chart network"
  },
  {
    "id": "ChartNoAxesColumn",
    "name": "ChartNoAxesColumn",
    "category": "Design",
    "keywords": "chart no axes column"
  },
  {
    "id": "ChartNoAxesColumnDecreasing",
    "name": "ChartNoAxesColumnDecreasing",
    "category": "Design",
    "keywords": "chart no axes column decreasing"
  },
  {
    "id": "ChartNoAxesColumnIncreasing",
    "name": "ChartNoAxesColumnIncreasing",
    "category": "Design",
    "keywords": "chart no axes column increasing"
  },
  {
    "id": "ChartNoAxesCombined",
    "name": "ChartNoAxesCombined",
    "category": "Design",
    "keywords": "chart no axes combined"
  },
  {
    "id": "ChartNoAxesGantt",
    "name": "ChartNoAxesGantt",
    "category": "Design",
    "keywords": "chart no axes gantt"
  },
  {
    "id": "ChartPie",
    "name": "ChartPie",
    "category": "Design",
    "keywords": "chart pie"
  },
  {
    "id": "ChartScatter",
    "name": "ChartScatter",
    "category": "Design",
    "keywords": "chart scatter"
  },
  {
    "id": "ChartSpline",
    "name": "ChartSpline",
    "category": "Design",
    "keywords": "chart spline"
  },
  {
    "id": "Check",
    "name": "Check",
    "category": "Symbols",
    "keywords": "check"
  },
  {
    "id": "CheckCheck",
    "name": "CheckCheck",
    "category": "Symbols",
    "keywords": "check check"
  },
  {
    "id": "CheckCircle",
    "name": "CheckCircle",
    "category": "Symbols",
    "keywords": "check circle"
  },
  {
    "id": "CheckCircle2",
    "name": "CheckCircle2",
    "category": "Symbols",
    "keywords": "check circle2"
  },
  {
    "id": "CheckLine",
    "name": "CheckLine",
    "category": "Symbols",
    "keywords": "check line"
  },
  {
    "id": "CheckSquare",
    "name": "CheckSquare",
    "category": "Symbols",
    "keywords": "check square"
  },
  {
    "id": "CheckSquare2",
    "name": "CheckSquare2",
    "category": "Symbols",
    "keywords": "check square2"
  },
  {
    "id": "ChefHat",
    "name": "ChefHat",
    "category": "General",
    "keywords": "chef hat"
  },
  {
    "id": "Cherry",
    "name": "Cherry",
    "category": "General",
    "keywords": "cherry"
  },
  {
    "id": "ChevronDown",
    "name": "ChevronDown",
    "category": "Navigation",
    "keywords": "chevron down"
  },
  {
    "id": "ChevronDownCircle",
    "name": "ChevronDownCircle",
    "category": "Navigation",
    "keywords": "chevron down circle"
  },
  {
    "id": "ChevronDownSquare",
    "name": "ChevronDownSquare",
    "category": "Navigation",
    "keywords": "chevron down square"
  },
  {
    "id": "ChevronFirst",
    "name": "ChevronFirst",
    "category": "Navigation",
    "keywords": "chevron first"
  },
  {
    "id": "ChevronLast",
    "name": "ChevronLast",
    "category": "Navigation",
    "keywords": "chevron last"
  },
  {
    "id": "ChevronLeft",
    "name": "ChevronLeft",
    "category": "Navigation",
    "keywords": "chevron left"
  },
  {
    "id": "ChevronLeftCircle",
    "name": "ChevronLeftCircle",
    "category": "Navigation",
    "keywords": "chevron left circle"
  },
  {
    "id": "ChevronLeftSquare",
    "name": "ChevronLeftSquare",
    "category": "Navigation",
    "keywords": "chevron left square"
  },
  {
    "id": "ChevronRight",
    "name": "ChevronRight",
    "category": "Navigation",
    "keywords": "chevron right"
  },
  {
    "id": "ChevronRightCircle",
    "name": "ChevronRightCircle",
    "category": "Navigation",
    "keywords": "chevron right circle"
  },
  {
    "id": "ChevronRightSquare",
    "name": "ChevronRightSquare",
    "category": "Navigation",
    "keywords": "chevron right square"
  },
  {
    "id": "ChevronUp",
    "name": "ChevronUp",
    "category": "Navigation",
    "keywords": "chevron up"
  },
  {
    "id": "ChevronUpCircle",
    "name": "ChevronUpCircle",
    "category": "Navigation",
    "keywords": "chevron up circle"
  },
  {
    "id": "ChevronUpSquare",
    "name": "ChevronUpSquare",
    "category": "Navigation",
    "keywords": "chevron up square"
  },
  {
    "id": "ChevronsDown",
    "name": "ChevronsDown",
    "category": "Navigation",
    "keywords": "chevrons down"
  },
  {
    "id": "ChevronsDownUp",
    "name": "ChevronsDownUp",
    "category": "Navigation",
    "keywords": "chevrons down up"
  },
  {
    "id": "ChevronsLeft",
    "name": "ChevronsLeft",
    "category": "Navigation",
    "keywords": "chevrons left"
  },
  {
    "id": "ChevronsLeftRight",
    "name": "ChevronsLeftRight",
    "category": "Navigation",
    "keywords": "chevrons left right"
  },
  {
    "id": "ChevronsLeftRightEllipsis",
    "name": "ChevronsLeftRightEllipsis",
    "category": "Navigation",
    "keywords": "chevrons left right ellipsis"
  },
  {
    "id": "ChevronsRight",
    "name": "ChevronsRight",
    "category": "Navigation",
    "keywords": "chevrons right"
  },
  {
    "id": "ChevronsRightLeft",
    "name": "ChevronsRightLeft",
    "category": "Navigation",
    "keywords": "chevrons right left"
  },
  {
    "id": "ChevronsUp",
    "name": "ChevronsUp",
    "category": "Navigation",
    "keywords": "chevrons up"
  },
  {
    "id": "ChevronsUpDown",
    "name": "ChevronsUpDown",
    "category": "Navigation",
    "keywords": "chevrons up down"
  },
  {
    "id": "Chrome",
    "name": "Chrome",
    "category": "General",
    "keywords": "chrome"
  },
  {
    "id": "Chromium",
    "name": "Chromium",
    "category": "General",
    "keywords": "chromium"
  },
  {
    "id": "Church",
    "name": "Church",
    "category": "General",
    "keywords": "church"
  },
  {
    "id": "Cigarette",
    "name": "Cigarette",
    "category": "General",
    "keywords": "cigarette"
  },
  {
    "id": "CigaretteOff",
    "name": "CigaretteOff",
    "category": "General",
    "keywords": "cigarette off"
  },
  {
    "id": "Circle",
    "name": "Circle",
    "category": "General",
    "keywords": "circle"
  },
  {
    "id": "CircleAlert",
    "name": "CircleAlert",
    "category": "Symbols",
    "keywords": "circle alert"
  },
  {
    "id": "CircleArrowDown",
    "name": "CircleArrowDown",
    "category": "Navigation",
    "keywords": "circle arrow down"
  },
  {
    "id": "CircleArrowLeft",
    "name": "CircleArrowLeft",
    "category": "Navigation",
    "keywords": "circle arrow left"
  },
  {
    "id": "CircleArrowOutDownLeft",
    "name": "CircleArrowOutDownLeft",
    "category": "Navigation",
    "keywords": "circle arrow out down left"
  },
  {
    "id": "CircleArrowOutDownRight",
    "name": "CircleArrowOutDownRight",
    "category": "Navigation",
    "keywords": "circle arrow out down right"
  },
  {
    "id": "CircleArrowOutUpLeft",
    "name": "CircleArrowOutUpLeft",
    "category": "Navigation",
    "keywords": "circle arrow out up left"
  },
  {
    "id": "CircleArrowOutUpRight",
    "name": "CircleArrowOutUpRight",
    "category": "Navigation",
    "keywords": "circle arrow out up right"
  },
  {
    "id": "CircleArrowRight",
    "name": "CircleArrowRight",
    "category": "Navigation",
    "keywords": "circle arrow right"
  },
  {
    "id": "CircleArrowUp",
    "name": "CircleArrowUp",
    "category": "Navigation",
    "keywords": "circle arrow up"
  },
  {
    "id": "CircleCheck",
    "name": "CircleCheck",
    "category": "Symbols",
    "keywords": "circle check"
  },
  {
    "id": "CircleCheckBig",
    "name": "CircleCheckBig",
    "category": "Symbols",
    "keywords": "circle check big"
  },
  {
    "id": "CircleChevronDown",
    "name": "CircleChevronDown",
    "category": "Navigation",
    "keywords": "circle chevron down"
  },
  {
    "id": "CircleChevronLeft",
    "name": "CircleChevronLeft",
    "category": "Navigation",
    "keywords": "circle chevron left"
  },
  {
    "id": "CircleChevronRight",
    "name": "CircleChevronRight",
    "category": "Navigation",
    "keywords": "circle chevron right"
  },
  {
    "id": "CircleChevronUp",
    "name": "CircleChevronUp",
    "category": "Navigation",
    "keywords": "circle chevron up"
  },
  {
    "id": "CircleDashed",
    "name": "CircleDashed",
    "category": "General",
    "keywords": "circle dashed"
  },
  {
    "id": "CircleDivide",
    "name": "CircleDivide",
    "category": "General",
    "keywords": "circle divide"
  },
  {
    "id": "CircleDollarSign",
    "name": "CircleDollarSign",
    "category": "General",
    "keywords": "circle dollar sign"
  },
  {
    "id": "CircleDot",
    "name": "CircleDot",
    "category": "General",
    "keywords": "circle dot"
  },
  {
    "id": "CircleDotDashed",
    "name": "CircleDotDashed",
    "category": "General",
    "keywords": "circle dot dashed"
  },
  {
    "id": "CircleEllipsis",
    "name": "CircleEllipsis",
    "category": "General",
    "keywords": "circle ellipsis"
  },
  {
    "id": "CircleEqual",
    "name": "CircleEqual",
    "category": "General",
    "keywords": "circle equal"
  },
  {
    "id": "CircleFadingArrowUp",
    "name": "CircleFadingArrowUp",
    "category": "Navigation",
    "keywords": "circle fading arrow up"
  },
  {
    "id": "CircleFadingPlus",
    "name": "CircleFadingPlus",
    "category": "Symbols",
    "keywords": "circle fading plus"
  },
  {
    "id": "CircleGauge",
    "name": "CircleGauge",
    "category": "General",
    "keywords": "circle gauge"
  },
  {
    "id": "CircleHelp",
    "name": "CircleHelp",
    "category": "Symbols",
    "keywords": "circle help"
  },
  {
    "id": "CircleMinus",
    "name": "CircleMinus",
    "category": "Symbols",
    "keywords": "circle minus"
  },
  {
    "id": "CircleOff",
    "name": "CircleOff",
    "category": "General",
    "keywords": "circle off"
  },
  {
    "id": "CircleParking",
    "name": "CircleParking",
    "category": "General",
    "keywords": "circle parking"
  },
  {
    "id": "CircleParkingOff",
    "name": "CircleParkingOff",
    "category": "General",
    "keywords": "circle parking off"
  },
  {
    "id": "CirclePause",
    "name": "CirclePause",
    "category": "Media",
    "keywords": "circle pause"
  },
  {
    "id": "CirclePercent",
    "name": "CirclePercent",
    "category": "General",
    "keywords": "circle percent"
  },
  {
    "id": "CirclePlay",
    "name": "CirclePlay",
    "category": "Media",
    "keywords": "circle play"
  },
  {
    "id": "CirclePlus",
    "name": "CirclePlus",
    "category": "Symbols",
    "keywords": "circle plus"
  },
  {
    "id": "CirclePoundSterling",
    "name": "CirclePoundSterling",
    "category": "General",
    "keywords": "circle pound sterling"
  },
  {
    "id": "CirclePower",
    "name": "CirclePower",
    "category": "Devices",
    "keywords": "circle power"
  },
  {
    "id": "CircleQuestionMark",
    "name": "CircleQuestionMark",
    "category": "General",
    "keywords": "circle question mark"
  },
  {
    "id": "CircleSlash",
    "name": "CircleSlash",
    "category": "General",
    "keywords": "circle slash"
  },
  {
    "id": "CircleSlash2",
    "name": "CircleSlash2",
    "category": "General",
    "keywords": "circle slash2"
  },
  {
    "id": "CircleSlashed",
    "name": "CircleSlashed",
    "category": "General",
    "keywords": "circle slashed"
  },
  {
    "id": "CircleSmall",
    "name": "CircleSmall",
    "category": "General",
    "keywords": "circle small"
  },
  {
    "id": "CircleStar",
    "name": "CircleStar",
    "category": "Symbols",
    "keywords": "circle star"
  },
  {
    "id": "CircleStop",
    "name": "CircleStop",
    "category": "General",
    "keywords": "circle stop"
  },
  {
    "id": "CircleUser",
    "name": "CircleUser",
    "category": "Symbols",
    "keywords": "circle user"
  },
  {
    "id": "CircleUserRound",
    "name": "CircleUserRound",
    "category": "Symbols",
    "keywords": "circle user round"
  },
  {
    "id": "CircleX",
    "name": "CircleX",
    "category": "General",
    "keywords": "circle x"
  },
  {
    "id": "CircuitBoard",
    "name": "CircuitBoard",
    "category": "General",
    "keywords": "circuit board"
  },
  {
    "id": "Citrus",
    "name": "Citrus",
    "category": "General",
    "keywords": "citrus"
  },
  {
    "id": "Clapperboard",
    "name": "Clapperboard",
    "category": "Media",
    "keywords": "clapperboard"
  },
  {
    "id": "Clipboard",
    "name": "Clipboard",
    "category": "General",
    "keywords": "clipboard"
  },
  {
    "id": "ClipboardCheck",
    "name": "ClipboardCheck",
    "category": "Symbols",
    "keywords": "clipboard check"
  },
  {
    "id": "ClipboardClock",
    "name": "ClipboardClock",
    "category": "System",
    "keywords": "clipboard clock"
  },
  {
    "id": "ClipboardCopy",
    "name": "ClipboardCopy",
    "category": "Symbols",
    "keywords": "clipboard copy"
  },
  {
    "id": "ClipboardEdit",
    "name": "ClipboardEdit",
    "category": "General",
    "keywords": "clipboard edit"
  },
  {
    "id": "ClipboardList",
    "name": "ClipboardList",
    "category": "General",
    "keywords": "clipboard list"
  },
  {
    "id": "ClipboardMinus",
    "name": "ClipboardMinus",
    "category": "Symbols",
    "keywords": "clipboard minus"
  },
  {
    "id": "ClipboardPaste",
    "name": "ClipboardPaste",
    "category": "General",
    "keywords": "clipboard paste"
  },
  {
    "id": "ClipboardPen",
    "name": "ClipboardPen",
    "category": "Design",
    "keywords": "clipboard pen"
  },
  {
    "id": "ClipboardPenLine",
    "name": "ClipboardPenLine",
    "category": "Design",
    "keywords": "clipboard pen line"
  },
  {
    "id": "ClipboardPlus",
    "name": "ClipboardPlus",
    "category": "Symbols",
    "keywords": "clipboard plus"
  },
  {
    "id": "ClipboardSignature",
    "name": "ClipboardSignature",
    "category": "General",
    "keywords": "clipboard signature"
  },
  {
    "id": "ClipboardType",
    "name": "ClipboardType",
    "category": "General",
    "keywords": "clipboard type"
  },
  {
    "id": "ClipboardX",
    "name": "ClipboardX",
    "category": "General",
    "keywords": "clipboard x"
  },
  {
    "id": "Clock",
    "name": "Clock",
    "category": "System",
    "keywords": "clock"
  },
  {
    "id": "Clock1",
    "name": "Clock1",
    "category": "System",
    "keywords": "clock1"
  },
  {
    "id": "Clock10",
    "name": "Clock10",
    "category": "System",
    "keywords": "clock10"
  },
  {
    "id": "Clock11",
    "name": "Clock11",
    "category": "System",
    "keywords": "clock11"
  },
  {
    "id": "Clock12",
    "name": "Clock12",
    "category": "System",
    "keywords": "clock12"
  },
  {
    "id": "Clock2",
    "name": "Clock2",
    "category": "System",
    "keywords": "clock2"
  },
  {
    "id": "Clock3",
    "name": "Clock3",
    "category": "System",
    "keywords": "clock3"
  },
  {
    "id": "Clock4",
    "name": "Clock4",
    "category": "System",
    "keywords": "clock4"
  },
  {
    "id": "Clock5",
    "name": "Clock5",
    "category": "System",
    "keywords": "clock5"
  },
  {
    "id": "Clock6",
    "name": "Clock6",
    "category": "System",
    "keywords": "clock6"
  },
  {
    "id": "Clock7",
    "name": "Clock7",
    "category": "System",
    "keywords": "clock7"
  },
  {
    "id": "Clock8",
    "name": "Clock8",
    "category": "System",
    "keywords": "clock8"
  },
  {
    "id": "Clock9",
    "name": "Clock9",
    "category": "System",
    "keywords": "clock9"
  },
  {
    "id": "ClockAlert",
    "name": "ClockAlert",
    "category": "System",
    "keywords": "clock alert"
  },
  {
    "id": "ClockArrowDown",
    "name": "ClockArrowDown",
    "category": "Navigation",
    "keywords": "clock arrow down"
  },
  {
    "id": "ClockArrowUp",
    "name": "ClockArrowUp",
    "category": "Navigation",
    "keywords": "clock arrow up"
  },
  {
    "id": "ClockFading",
    "name": "ClockFading",
    "category": "System",
    "keywords": "clock fading"
  },
  {
    "id": "ClockPlus",
    "name": "ClockPlus",
    "category": "System",
    "keywords": "clock plus"
  },
  {
    "id": "ClosedCaption",
    "name": "ClosedCaption",
    "category": "General",
    "keywords": "closed caption"
  },
  {
    "id": "Cloud",
    "name": "Cloud",
    "category": "Symbols",
    "keywords": "cloud"
  },
  {
    "id": "CloudAlert",
    "name": "CloudAlert",
    "category": "Symbols",
    "keywords": "cloud alert"
  },
  {
    "id": "CloudCheck",
    "name": "CloudCheck",
    "category": "Symbols",
    "keywords": "cloud check"
  },
  {
    "id": "CloudCog",
    "name": "CloudCog",
    "category": "Symbols",
    "keywords": "cloud cog"
  },
  {
    "id": "CloudDownload",
    "name": "CloudDownload",
    "category": "Symbols",
    "keywords": "cloud download"
  },
  {
    "id": "CloudDrizzle",
    "name": "CloudDrizzle",
    "category": "Symbols",
    "keywords": "cloud drizzle"
  },
  {
    "id": "CloudFog",
    "name": "CloudFog",
    "category": "Symbols",
    "keywords": "cloud fog"
  },
  {
    "id": "CloudHail",
    "name": "CloudHail",
    "category": "Symbols",
    "keywords": "cloud hail"
  },
  {
    "id": "CloudLightning",
    "name": "CloudLightning",
    "category": "Symbols",
    "keywords": "cloud lightning"
  },
  {
    "id": "CloudMoon",
    "name": "CloudMoon",
    "category": "Symbols",
    "keywords": "cloud moon"
  },
  {
    "id": "CloudMoonRain",
    "name": "CloudMoonRain",
    "category": "Symbols",
    "keywords": "cloud moon rain"
  },
  {
    "id": "CloudOff",
    "name": "CloudOff",
    "category": "Symbols",
    "keywords": "cloud off"
  },
  {
    "id": "CloudRain",
    "name": "CloudRain",
    "category": "Symbols",
    "keywords": "cloud rain"
  },
  {
    "id": "CloudRainWind",
    "name": "CloudRainWind",
    "category": "Symbols",
    "keywords": "cloud rain wind"
  },
  {
    "id": "CloudSnow",
    "name": "CloudSnow",
    "category": "Symbols",
    "keywords": "cloud snow"
  },
  {
    "id": "CloudSun",
    "name": "CloudSun",
    "category": "Symbols",
    "keywords": "cloud sun"
  },
  {
    "id": "CloudSunRain",
    "name": "CloudSunRain",
    "category": "Symbols",
    "keywords": "cloud sun rain"
  },
  {
    "id": "CloudUpload",
    "name": "CloudUpload",
    "category": "Symbols",
    "keywords": "cloud upload"
  },
  {
    "id": "Cloudy",
    "name": "Cloudy",
    "category": "Symbols",
    "keywords": "cloudy"
  },
  {
    "id": "Clover",
    "name": "Clover",
    "category": "General",
    "keywords": "clover"
  },
  {
    "id": "Club",
    "name": "Club",
    "category": "General",
    "keywords": "club"
  },
  {
    "id": "Code",
    "name": "Code",
    "category": "System",
    "keywords": "code"
  },
  {
    "id": "Code2",
    "name": "Code2",
    "category": "System",
    "keywords": "code2"
  },
  {
    "id": "CodeSquare",
    "name": "CodeSquare",
    "category": "System",
    "keywords": "code square"
  },
  {
    "id": "CodeXml",
    "name": "CodeXml",
    "category": "System",
    "keywords": "code xml"
  },
  {
    "id": "Codepen",
    "name": "Codepen",
    "category": "Design",
    "keywords": "codepen"
  },
  {
    "id": "Codesandbox",
    "name": "Codesandbox",
    "category": "System",
    "keywords": "codesandbox"
  },
  {
    "id": "Coffee",
    "name": "Coffee",
    "category": "General",
    "keywords": "coffee"
  },
  {
    "id": "Cog",
    "name": "Cog",
    "category": "General",
    "keywords": "cog"
  },
  {
    "id": "Coins",
    "name": "Coins",
    "category": "General",
    "keywords": "coins"
  },
  {
    "id": "Columns",
    "name": "Columns",
    "category": "General",
    "keywords": "columns"
  },
  {
    "id": "Columns2",
    "name": "Columns2",
    "category": "General",
    "keywords": "columns2"
  },
  {
    "id": "Columns3",
    "name": "Columns3",
    "category": "General",
    "keywords": "columns3"
  },
  {
    "id": "Columns3Cog",
    "name": "Columns3Cog",
    "category": "General",
    "keywords": "columns3 cog"
  },
  {
    "id": "Columns4",
    "name": "Columns4",
    "category": "General",
    "keywords": "columns4"
  },
  {
    "id": "ColumnsSettings",
    "name": "ColumnsSettings",
    "category": "System",
    "keywords": "columns settings"
  },
  {
    "id": "Combine",
    "name": "Combine",
    "category": "General",
    "keywords": "combine"
  },
  {
    "id": "Command",
    "name": "Command",
    "category": "System",
    "keywords": "command"
  },
  {
    "id": "Compass",
    "name": "Compass",
    "category": "Navigation",
    "keywords": "compass"
  },
  {
    "id": "Component",
    "name": "Component",
    "category": "General",
    "keywords": "component"
  },
  {
    "id": "Computer",
    "name": "Computer",
    "category": "Devices",
    "keywords": "computer"
  },
  {
    "id": "ConciergeBell",
    "name": "ConciergeBell",
    "category": "Symbols",
    "keywords": "concierge bell"
  },
  {
    "id": "Cone",
    "name": "Cone",
    "category": "General",
    "keywords": "cone"
  },
  {
    "id": "Construction",
    "name": "Construction",
    "category": "General",
    "keywords": "construction"
  },
  {
    "id": "Contact",
    "name": "Contact",
    "category": "General",
    "keywords": "contact"
  },
  {
    "id": "Contact2",
    "name": "Contact2",
    "category": "General",
    "keywords": "contact2"
  },
  {
    "id": "ContactRound",
    "name": "ContactRound",
    "category": "General",
    "keywords": "contact round"
  },
  {
    "id": "Container",
    "name": "Container",
    "category": "General",
    "keywords": "container"
  },
  {
    "id": "Contrast",
    "name": "Contrast",
    "category": "General",
    "keywords": "contrast"
  },
  {
    "id": "Cookie",
    "name": "Cookie",
    "category": "General",
    "keywords": "cookie"
  },
  {
    "id": "CookingPot",
    "name": "CookingPot",
    "category": "General",
    "keywords": "cooking pot"
  },
  {
    "id": "Copy",
    "name": "Copy",
    "category": "Symbols",
    "keywords": "copy"
  },
  {
    "id": "CopyCheck",
    "name": "CopyCheck",
    "category": "Symbols",
    "keywords": "copy check"
  },
  {
    "id": "CopyMinus",
    "name": "CopyMinus",
    "category": "Symbols",
    "keywords": "copy minus"
  },
  {
    "id": "CopyPlus",
    "name": "CopyPlus",
    "category": "Symbols",
    "keywords": "copy plus"
  },
  {
    "id": "CopySlash",
    "name": "CopySlash",
    "category": "Symbols",
    "keywords": "copy slash"
  },
  {
    "id": "CopyX",
    "name": "CopyX",
    "category": "Symbols",
    "keywords": "copy x"
  },
  {
    "id": "Copyleft",
    "name": "Copyleft",
    "category": "Symbols",
    "keywords": "copyleft"
  },
  {
    "id": "Copyright",
    "name": "Copyright",
    "category": "Symbols",
    "keywords": "copyright"
  },
  {
    "id": "CornerDownLeft",
    "name": "CornerDownLeft",
    "category": "Navigation",
    "keywords": "corner down left"
  },
  {
    "id": "CornerDownRight",
    "name": "CornerDownRight",
    "category": "Navigation",
    "keywords": "corner down right"
  },
  {
    "id": "CornerLeftDown",
    "name": "CornerLeftDown",
    "category": "Navigation",
    "keywords": "corner left down"
  },
  {
    "id": "CornerLeftUp",
    "name": "CornerLeftUp",
    "category": "Navigation",
    "keywords": "corner left up"
  },
  {
    "id": "CornerRightDown",
    "name": "CornerRightDown",
    "category": "Navigation",
    "keywords": "corner right down"
  },
  {
    "id": "CornerRightUp",
    "name": "CornerRightUp",
    "category": "Navigation",
    "keywords": "corner right up"
  },
  {
    "id": "CornerUpLeft",
    "name": "CornerUpLeft",
    "category": "Navigation",
    "keywords": "corner up left"
  },
  {
    "id": "CornerUpRight",
    "name": "CornerUpRight",
    "category": "Navigation",
    "keywords": "corner up right"
  },
  {
    "id": "Cpu",
    "name": "Cpu",
    "category": "Devices",
    "keywords": "cpu"
  },
  {
    "id": "CreativeCommons",
    "name": "CreativeCommons",
    "category": "General",
    "keywords": "creative commons"
  },
  {
    "id": "CreditCard",
    "name": "CreditCard",
    "category": "General",
    "keywords": "credit card"
  },
  {
    "id": "Croissant",
    "name": "Croissant",
    "category": "General",
    "keywords": "croissant"
  },
  {
    "id": "Crop",
    "name": "Crop",
    "category": "Design",
    "keywords": "crop"
  },
  {
    "id": "Cross",
    "name": "Cross",
    "category": "Symbols",
    "keywords": "cross"
  },
  {
    "id": "Crosshair",
    "name": "Crosshair",
    "category": "Symbols",
    "keywords": "crosshair"
  },
  {
    "id": "Crown",
    "name": "Crown",
    "category": "General",
    "keywords": "crown"
  },
  {
    "id": "Cuboid",
    "name": "Cuboid",
    "category": "General",
    "keywords": "cuboid"
  },
  {
    "id": "CupSoda",
    "name": "CupSoda",
    "category": "General",
    "keywords": "cup soda"
  },
  {
    "id": "CurlyBraces",
    "name": "CurlyBraces",
    "category": "System",
    "keywords": "curly braces"
  },
  {
    "id": "Currency",
    "name": "Currency",
    "category": "General",
    "keywords": "currency"
  },
  {
    "id": "Cylinder",
    "name": "Cylinder",
    "category": "General",
    "keywords": "cylinder"
  },
  {
    "id": "Dam",
    "name": "Dam",
    "category": "General",
    "keywords": "dam"
  },
  {
    "id": "Database",
    "name": "Database",
    "category": "System",
    "keywords": "database"
  },
  {
    "id": "DatabaseBackup",
    "name": "DatabaseBackup",
    "category": "System",
    "keywords": "database backup"
  },
  {
    "id": "DatabaseZap",
    "name": "DatabaseZap",
    "category": "System",
    "keywords": "database zap"
  },
  {
    "id": "DecimalsArrowLeft",
    "name": "DecimalsArrowLeft",
    "category": "Navigation",
    "keywords": "decimals arrow left"
  },
  {
    "id": "DecimalsArrowRight",
    "name": "DecimalsArrowRight",
    "category": "Navigation",
    "keywords": "decimals arrow right"
  },
  {
    "id": "Delete",
    "name": "Delete",
    "category": "General",
    "keywords": "delete"
  },
  {
    "id": "Dessert",
    "name": "Dessert",
    "category": "General",
    "keywords": "dessert"
  },
  {
    "id": "Diameter",
    "name": "Diameter",
    "category": "General",
    "keywords": "diameter"
  },
  {
    "id": "Diamond",
    "name": "Diamond",
    "category": "General",
    "keywords": "diamond"
  },
  {
    "id": "DiamondMinus",
    "name": "DiamondMinus",
    "category": "Symbols",
    "keywords": "diamond minus"
  },
  {
    "id": "DiamondPercent",
    "name": "DiamondPercent",
    "category": "General",
    "keywords": "diamond percent"
  },
  {
    "id": "DiamondPlus",
    "name": "DiamondPlus",
    "category": "Symbols",
    "keywords": "diamond plus"
  },
  {
    "id": "Dice1",
    "name": "Dice1",
    "category": "General",
    "keywords": "dice1"
  },
  {
    "id": "Dice2",
    "name": "Dice2",
    "category": "General",
    "keywords": "dice2"
  },
  {
    "id": "Dice3",
    "name": "Dice3",
    "category": "General",
    "keywords": "dice3"
  },
  {
    "id": "Dice4",
    "name": "Dice4",
    "category": "General",
    "keywords": "dice4"
  },
  {
    "id": "Dice5",
    "name": "Dice5",
    "category": "General",
    "keywords": "dice5"
  },
  {
    "id": "Dice6",
    "name": "Dice6",
    "category": "General",
    "keywords": "dice6"
  },
  {
    "id": "Dices",
    "name": "Dices",
    "category": "General",
    "keywords": "dices"
  },
  {
    "id": "Diff",
    "name": "Diff",
    "category": "General",
    "keywords": "diff"
  },
  {
    "id": "Disc",
    "name": "Disc",
    "category": "Media",
    "keywords": "disc"
  },
  {
    "id": "Disc2",
    "name": "Disc2",
    "category": "Media",
    "keywords": "disc2"
  },
  {
    "id": "Disc3",
    "name": "Disc3",
    "category": "Media",
    "keywords": "disc3"
  },
  {
    "id": "DiscAlbum",
    "name": "DiscAlbum",
    "category": "Media",
    "keywords": "disc album"
  },
  {
    "id": "Divide",
    "name": "Divide",
    "category": "General",
    "keywords": "divide"
  },
  {
    "id": "DivideCircle",
    "name": "DivideCircle",
    "category": "General",
    "keywords": "divide circle"
  },
  {
    "id": "DivideSquare",
    "name": "DivideSquare",
    "category": "General",
    "keywords": "divide square"
  },
  {
    "id": "Dna",
    "name": "Dna",
    "category": "General",
    "keywords": "dna"
  },
  {
    "id": "DnaOff",
    "name": "DnaOff",
    "category": "General",
    "keywords": "dna off"
  },
  {
    "id": "Dock",
    "name": "Dock",
    "category": "General",
    "keywords": "dock"
  },
  {
    "id": "Dog",
    "name": "Dog",
    "category": "General",
    "keywords": "dog"
  },
  {
    "id": "DollarSign",
    "name": "DollarSign",
    "category": "General",
    "keywords": "dollar sign"
  },
  {
    "id": "Donut",
    "name": "Donut",
    "category": "General",
    "keywords": "donut"
  },
  {
    "id": "DoorClosed",
    "name": "DoorClosed",
    "category": "General",
    "keywords": "door closed"
  },
  {
    "id": "DoorClosedLocked",
    "name": "DoorClosedLocked",
    "category": "System",
    "keywords": "door closed locked"
  },
  {
    "id": "DoorOpen",
    "name": "DoorOpen",
    "category": "Design",
    "keywords": "door open"
  },
  {
    "id": "Dot",
    "name": "Dot",
    "category": "General",
    "keywords": "dot"
  },
  {
    "id": "DotSquare",
    "name": "DotSquare",
    "category": "General",
    "keywords": "dot square"
  },
  {
    "id": "Download",
    "name": "Download",
    "category": "General",
    "keywords": "download"
  },
  {
    "id": "DownloadCloud",
    "name": "DownloadCloud",
    "category": "Symbols",
    "keywords": "download cloud"
  },
  {
    "id": "DraftingCompass",
    "name": "DraftingCompass",
    "category": "Navigation",
    "keywords": "drafting compass"
  },
  {
    "id": "Drama",
    "name": "Drama",
    "category": "General",
    "keywords": "drama"
  },
  {
    "id": "Dribbble",
    "name": "Dribbble",
    "category": "General",
    "keywords": "dribbble"
  },
  {
    "id": "Drill",
    "name": "Drill",
    "category": "General",
    "keywords": "drill"
  },
  {
    "id": "Drone",
    "name": "Drone",
    "category": "General",
    "keywords": "drone"
  },
  {
    "id": "Droplet",
    "name": "Droplet",
    "category": "General",
    "keywords": "droplet"
  },
  {
    "id": "DropletOff",
    "name": "DropletOff",
    "category": "General",
    "keywords": "droplet off"
  },
  {
    "id": "Droplets",
    "name": "Droplets",
    "category": "General",
    "keywords": "droplets"
  },
  {
    "id": "Drum",
    "name": "Drum",
    "category": "General",
    "keywords": "drum"
  },
  {
    "id": "Drumstick",
    "name": "Drumstick",
    "category": "General",
    "keywords": "drumstick"
  },
  {
    "id": "Dumbbell",
    "name": "Dumbbell",
    "category": "Symbols",
    "keywords": "dumbbell"
  },
  {
    "id": "Ear",
    "name": "Ear",
    "category": "General",
    "keywords": "ear"
  },
  {
    "id": "EarOff",
    "name": "EarOff",
    "category": "General",
    "keywords": "ear off"
  },
  {
    "id": "Earth",
    "name": "Earth",
    "category": "Design",
    "keywords": "earth"
  },
  {
    "id": "EarthLock",
    "name": "EarthLock",
    "category": "Design",
    "keywords": "earth lock"
  },
  {
    "id": "Eclipse",
    "name": "Eclipse",
    "category": "General",
    "keywords": "eclipse"
  },
  {
    "id": "Edit",
    "name": "Edit",
    "category": "General",
    "keywords": "edit"
  },
  {
    "id": "Edit2",
    "name": "Edit2",
    "category": "General",
    "keywords": "edit2"
  },
  {
    "id": "Edit3",
    "name": "Edit3",
    "category": "General",
    "keywords": "edit3"
  },
  {
    "id": "Egg",
    "name": "Egg",
    "category": "General",
    "keywords": "egg"
  },
  {
    "id": "EggFried",
    "name": "EggFried",
    "category": "General",
    "keywords": "egg fried"
  },
  {
    "id": "EggOff",
    "name": "EggOff",
    "category": "General",
    "keywords": "egg off"
  },
  {
    "id": "Ellipsis",
    "name": "Ellipsis",
    "category": "General",
    "keywords": "ellipsis"
  },
  {
    "id": "EllipsisVertical",
    "name": "EllipsisVertical",
    "category": "General",
    "keywords": "ellipsis vertical"
  },
  {
    "id": "Equal",
    "name": "Equal",
    "category": "General",
    "keywords": "equal"
  },
  {
    "id": "EqualApproximately",
    "name": "EqualApproximately",
    "category": "General",
    "keywords": "equal approximately"
  },
  {
    "id": "EqualNot",
    "name": "EqualNot",
    "category": "General",
    "keywords": "equal not"
  },
  {
    "id": "EqualSquare",
    "name": "EqualSquare",
    "category": "General",
    "keywords": "equal square"
  },
  {
    "id": "Eraser",
    "name": "Eraser",
    "category": "Design",
    "keywords": "eraser"
  },
  {
    "id": "EthernetPort",
    "name": "EthernetPort",
    "category": "General",
    "keywords": "ethernet port"
  },
  {
    "id": "Euro",
    "name": "Euro",
    "category": "General",
    "keywords": "euro"
  },
  {
    "id": "EvCharger",
    "name": "EvCharger",
    "category": "General",
    "keywords": "ev charger"
  },
  {
    "id": "Expand",
    "name": "Expand",
    "category": "General",
    "keywords": "expand"
  },
  {
    "id": "ExternalLink",
    "name": "ExternalLink",
    "category": "Symbols",
    "keywords": "external link"
  },
  {
    "id": "Eye",
    "name": "Eye",
    "category": "Symbols",
    "keywords": "eye"
  },
  {
    "id": "EyeClosed",
    "name": "EyeClosed",
    "category": "Symbols",
    "keywords": "eye closed"
  },
  {
    "id": "EyeOff",
    "name": "EyeOff",
    "category": "Symbols",
    "keywords": "eye off"
  },
  {
    "id": "Facebook",
    "name": "Facebook",
    "category": "General",
    "keywords": "facebook"
  },
  {
    "id": "Factory",
    "name": "Factory",
    "category": "General",
    "keywords": "factory"
  },
  {
    "id": "Fan",
    "name": "Fan",
    "category": "General",
    "keywords": "fan"
  },
  {
    "id": "FastForward",
    "name": "FastForward",
    "category": "General",
    "keywords": "fast forward"
  },
  {
    "id": "Feather",
    "name": "Feather",
    "category": "General",
    "keywords": "feather"
  },
  {
    "id": "Fence",
    "name": "Fence",
    "category": "General",
    "keywords": "fence"
  },
  {
    "id": "FerrisWheel",
    "name": "FerrisWheel",
    "category": "General",
    "keywords": "ferris wheel"
  },
  {
    "id": "Figma",
    "name": "Figma",
    "category": "General",
    "keywords": "figma"
  },
  {
    "id": "File",
    "name": "File",
    "category": "System",
    "keywords": "file"
  },
  {
    "id": "FileArchive",
    "name": "FileArchive",
    "category": "System",
    "keywords": "file archive"
  },
  {
    "id": "FileAudio",
    "name": "FileAudio",
    "category": "Media",
    "keywords": "file audio"
  },
  {
    "id": "FileAudio2",
    "name": "FileAudio2",
    "category": "Media",
    "keywords": "file audio2"
  },
  {
    "id": "FileAxis3D",
    "name": "FileAxis3D",
    "category": "System",
    "keywords": "file axis3 d"
  },
  {
    "id": "FileAxis3d",
    "name": "FileAxis3d",
    "category": "System",
    "keywords": "file axis3d"
  },
  {
    "id": "FileBadge",
    "name": "FileBadge",
    "category": "System",
    "keywords": "file badge"
  },
  {
    "id": "FileBadge2",
    "name": "FileBadge2",
    "category": "System",
    "keywords": "file badge2"
  },
  {
    "id": "FileBarChart",
    "name": "FileBarChart",
    "category": "Design",
    "keywords": "file bar chart"
  },
  {
    "id": "FileBarChart2",
    "name": "FileBarChart2",
    "category": "Design",
    "keywords": "file bar chart2"
  },
  {
    "id": "FileBox",
    "name": "FileBox",
    "category": "System",
    "keywords": "file box"
  },
  {
    "id": "FileChartColumn",
    "name": "FileChartColumn",
    "category": "Design",
    "keywords": "file chart column"
  },
  {
    "id": "FileChartColumnIncreasing",
    "name": "FileChartColumnIncreasing",
    "category": "Design",
    "keywords": "file chart column increasing"
  },
  {
    "id": "FileChartLine",
    "name": "FileChartLine",
    "category": "Design",
    "keywords": "file chart line"
  },
  {
    "id": "FileChartPie",
    "name": "FileChartPie",
    "category": "Design",
    "keywords": "file chart pie"
  },
  {
    "id": "FileCheck",
    "name": "FileCheck",
    "category": "System",
    "keywords": "file check"
  },
  {
    "id": "FileCheck2",
    "name": "FileCheck2",
    "category": "System",
    "keywords": "file check2"
  },
  {
    "id": "FileClock",
    "name": "FileClock",
    "category": "System",
    "keywords": "file clock"
  },
  {
    "id": "FileCode",
    "name": "FileCode",
    "category": "System",
    "keywords": "file code"
  },
  {
    "id": "FileCode2",
    "name": "FileCode2",
    "category": "System",
    "keywords": "file code2"
  },
  {
    "id": "FileCog",
    "name": "FileCog",
    "category": "System",
    "keywords": "file cog"
  },
  {
    "id": "FileCog2",
    "name": "FileCog2",
    "category": "System",
    "keywords": "file cog2"
  },
  {
    "id": "FileDiff",
    "name": "FileDiff",
    "category": "System",
    "keywords": "file diff"
  },
  {
    "id": "FileDigit",
    "name": "FileDigit",
    "category": "System",
    "keywords": "file digit"
  },
  {
    "id": "FileDown",
    "name": "FileDown",
    "category": "System",
    "keywords": "file down"
  },
  {
    "id": "FileEdit",
    "name": "FileEdit",
    "category": "System",
    "keywords": "file edit"
  },
  {
    "id": "FileHeart",
    "name": "FileHeart",
    "category": "Design",
    "keywords": "file heart"
  },
  {
    "id": "FileImage",
    "name": "FileImage",
    "category": "System",
    "keywords": "file image"
  },
  {
    "id": "FileInput",
    "name": "FileInput",
    "category": "System",
    "keywords": "file input"
  },
  {
    "id": "FileJson",
    "name": "FileJson",
    "category": "System",
    "keywords": "file json"
  },
  {
    "id": "FileJson2",
    "name": "FileJson2",
    "category": "System",
    "keywords": "file json2"
  },
  {
    "id": "FileKey",
    "name": "FileKey",
    "category": "System",
    "keywords": "file key"
  },
  {
    "id": "FileKey2",
    "name": "FileKey2",
    "category": "System",
    "keywords": "file key2"
  },
  {
    "id": "FileLineChart",
    "name": "FileLineChart",
    "category": "Design",
    "keywords": "file line chart"
  },
  {
    "id": "FileLock",
    "name": "FileLock",
    "category": "System",
    "keywords": "file lock"
  },
  {
    "id": "FileLock2",
    "name": "FileLock2",
    "category": "System",
    "keywords": "file lock2"
  },
  {
    "id": "FileMinus",
    "name": "FileMinus",
    "category": "System",
    "keywords": "file minus"
  },
  {
    "id": "FileMinus2",
    "name": "FileMinus2",
    "category": "System",
    "keywords": "file minus2"
  },
  {
    "id": "FileMusic",
    "name": "FileMusic",
    "category": "Media",
    "keywords": "file music"
  },
  {
    "id": "FileOutput",
    "name": "FileOutput",
    "category": "System",
    "keywords": "file output"
  },
  {
    "id": "FilePen",
    "name": "FilePen",
    "category": "Design",
    "keywords": "file pen"
  },
  {
    "id": "FilePenLine",
    "name": "FilePenLine",
    "category": "Design",
    "keywords": "file pen line"
  },
  {
    "id": "FilePieChart",
    "name": "FilePieChart",
    "category": "Design",
    "keywords": "file pie chart"
  },
  {
    "id": "FilePlay",
    "name": "FilePlay",
    "category": "Media",
    "keywords": "file play"
  },
  {
    "id": "FilePlus",
    "name": "FilePlus",
    "category": "System",
    "keywords": "file plus"
  },
  {
    "id": "FilePlus2",
    "name": "FilePlus2",
    "category": "System",
    "keywords": "file plus2"
  },
  {
    "id": "FileQuestion",
    "name": "FileQuestion",
    "category": "System",
    "keywords": "file question"
  },
  {
    "id": "FileQuestionMark",
    "name": "FileQuestionMark",
    "category": "System",
    "keywords": "file question mark"
  },
  {
    "id": "FileScan",
    "name": "FileScan",
    "category": "System",
    "keywords": "file scan"
  },
  {
    "id": "FileSearch",
    "name": "FileSearch",
    "category": "System",
    "keywords": "file search"
  },
  {
    "id": "FileSearch2",
    "name": "FileSearch2",
    "category": "System",
    "keywords": "file search2"
  },
  {
    "id": "FileSignature",
    "name": "FileSignature",
    "category": "System",
    "keywords": "file signature"
  },
  {
    "id": "FileSliders",
    "name": "FileSliders",
    "category": "System",
    "keywords": "file sliders"
  },
  {
    "id": "FileSpreadsheet",
    "name": "FileSpreadsheet",
    "category": "System",
    "keywords": "file spreadsheet"
  },
  {
    "id": "FileStack",
    "name": "FileStack",
    "category": "System",
    "keywords": "file stack"
  },
  {
    "id": "FileSymlink",
    "name": "FileSymlink",
    "category": "System",
    "keywords": "file symlink"
  },
  {
    "id": "FileTerminal",
    "name": "FileTerminal",
    "category": "System",
    "keywords": "file terminal"
  },
  {
    "id": "FileText",
    "name": "FileText",
    "category": "System",
    "keywords": "file text"
  },
  {
    "id": "FileType",
    "name": "FileType",
    "category": "System",
    "keywords": "file type"
  },
  {
    "id": "FileType2",
    "name": "FileType2",
    "category": "System",
    "keywords": "file type2"
  },
  {
    "id": "FileUp",
    "name": "FileUp",
    "category": "System",
    "keywords": "file up"
  },
  {
    "id": "FileUser",
    "name": "FileUser",
    "category": "System",
    "keywords": "file user"
  },
  {
    "id": "FileVideo",
    "name": "FileVideo",
    "category": "Media",
    "keywords": "file video"
  },
  {
    "id": "FileVideo2",
    "name": "FileVideo2",
    "category": "Media",
    "keywords": "file video2"
  },
  {
    "id": "FileVideoCamera",
    "name": "FileVideoCamera",
    "category": "Media",
    "keywords": "file video camera"
  },
  {
    "id": "FileVolume",
    "name": "FileVolume",
    "category": "Media",
    "keywords": "file volume"
  },
  {
    "id": "FileVolume2",
    "name": "FileVolume2",
    "category": "Media",
    "keywords": "file volume2"
  },
  {
    "id": "FileWarning",
    "name": "FileWarning",
    "category": "System",
    "keywords": "file warning"
  },
  {
    "id": "FileX",
    "name": "FileX",
    "category": "System",
    "keywords": "file x"
  },
  {
    "id": "FileX2",
    "name": "FileX2",
    "category": "System",
    "keywords": "file x2"
  },
  {
    "id": "Files",
    "name": "Files",
    "category": "System",
    "keywords": "files"
  },
  {
    "id": "Film",
    "name": "Film",
    "category": "Media",
    "keywords": "film"
  },
  {
    "id": "Filter",
    "name": "Filter",
    "category": "General",
    "keywords": "filter"
  },
  {
    "id": "FilterX",
    "name": "FilterX",
    "category": "General",
    "keywords": "filter x"
  },
  {
    "id": "Fingerprint",
    "name": "Fingerprint",
    "category": "General",
    "keywords": "fingerprint"
  },
  {
    "id": "FireExtinguisher",
    "name": "FireExtinguisher",
    "category": "Symbols",
    "keywords": "fire extinguisher"
  },
  {
    "id": "Fish",
    "name": "Fish",
    "category": "General",
    "keywords": "fish"
  },
  {
    "id": "FishOff",
    "name": "FishOff",
    "category": "General",
    "keywords": "fish off"
  },
  {
    "id": "FishSymbol",
    "name": "FishSymbol",
    "category": "General",
    "keywords": "fish symbol"
  },
  {
    "id": "Flag",
    "name": "Flag",
    "category": "Symbols",
    "keywords": "flag"
  },
  {
    "id": "FlagOff",
    "name": "FlagOff",
    "category": "Symbols",
    "keywords": "flag off"
  },
  {
    "id": "FlagTriangleLeft",
    "name": "FlagTriangleLeft",
    "category": "Symbols",
    "keywords": "flag triangle left"
  },
  {
    "id": "FlagTriangleRight",
    "name": "FlagTriangleRight",
    "category": "Symbols",
    "keywords": "flag triangle right"
  },
  {
    "id": "Flame",
    "name": "Flame",
    "category": "Symbols",
    "keywords": "flame"
  },
  {
    "id": "FlameKindling",
    "name": "FlameKindling",
    "category": "Symbols",
    "keywords": "flame kindling"
  },
  {
    "id": "Flashlight",
    "name": "Flashlight",
    "category": "General",
    "keywords": "flashlight"
  },
  {
    "id": "FlashlightOff",
    "name": "FlashlightOff",
    "category": "General",
    "keywords": "flashlight off"
  },
  {
    "id": "FlaskConical",
    "name": "FlaskConical",
    "category": "General",
    "keywords": "flask conical"
  },
  {
    "id": "FlaskConicalOff",
    "name": "FlaskConicalOff",
    "category": "General",
    "keywords": "flask conical off"
  },
  {
    "id": "FlaskRound",
    "name": "FlaskRound",
    "category": "General",
    "keywords": "flask round"
  },
  {
    "id": "FlipHorizontal",
    "name": "FlipHorizontal",
    "category": "General",
    "keywords": "flip horizontal"
  },
  {
    "id": "FlipHorizontal2",
    "name": "FlipHorizontal2",
    "category": "General",
    "keywords": "flip horizontal2"
  },
  {
    "id": "FlipVertical",
    "name": "FlipVertical",
    "category": "General",
    "keywords": "flip vertical"
  },
  {
    "id": "FlipVertical2",
    "name": "FlipVertical2",
    "category": "General",
    "keywords": "flip vertical2"
  },
  {
    "id": "Flower",
    "name": "Flower",
    "category": "General",
    "keywords": "flower"
  },
  {
    "id": "Flower2",
    "name": "Flower2",
    "category": "General",
    "keywords": "flower2"
  },
  {
    "id": "Focus",
    "name": "Focus",
    "category": "General",
    "keywords": "focus"
  },
  {
    "id": "FoldHorizontal",
    "name": "FoldHorizontal",
    "category": "General",
    "keywords": "fold horizontal"
  },
  {
    "id": "FoldVertical",
    "name": "FoldVertical",
    "category": "General",
    "keywords": "fold vertical"
  },
  {
    "id": "Folder",
    "name": "Folder",
    "category": "System",
    "keywords": "folder"
  },
  {
    "id": "FolderArchive",
    "name": "FolderArchive",
    "category": "System",
    "keywords": "folder archive"
  },
  {
    "id": "FolderCheck",
    "name": "FolderCheck",
    "category": "System",
    "keywords": "folder check"
  },
  {
    "id": "FolderClock",
    "name": "FolderClock",
    "category": "System",
    "keywords": "folder clock"
  },
  {
    "id": "FolderClosed",
    "name": "FolderClosed",
    "category": "System",
    "keywords": "folder closed"
  },
  {
    "id": "FolderCode",
    "name": "FolderCode",
    "category": "System",
    "keywords": "folder code"
  },
  {
    "id": "FolderCog",
    "name": "FolderCog",
    "category": "System",
    "keywords": "folder cog"
  },
  {
    "id": "FolderCog2",
    "name": "FolderCog2",
    "category": "System",
    "keywords": "folder cog2"
  },
  {
    "id": "FolderDot",
    "name": "FolderDot",
    "category": "System",
    "keywords": "folder dot"
  },
  {
    "id": "FolderDown",
    "name": "FolderDown",
    "category": "System",
    "keywords": "folder down"
  },
  {
    "id": "FolderEdit",
    "name": "FolderEdit",
    "category": "System",
    "keywords": "folder edit"
  },
  {
    "id": "FolderGit",
    "name": "FolderGit",
    "category": "System",
    "keywords": "folder git"
  },
  {
    "id": "FolderGit2",
    "name": "FolderGit2",
    "category": "System",
    "keywords": "folder git2"
  },
  {
    "id": "FolderHeart",
    "name": "FolderHeart",
    "category": "Design",
    "keywords": "folder heart"
  },
  {
    "id": "FolderInput",
    "name": "FolderInput",
    "category": "System",
    "keywords": "folder input"
  },
  {
    "id": "FolderKanban",
    "name": "FolderKanban",
    "category": "System",
    "keywords": "folder kanban"
  },
  {
    "id": "FolderKey",
    "name": "FolderKey",
    "category": "System",
    "keywords": "folder key"
  },
  {
    "id": "FolderLock",
    "name": "FolderLock",
    "category": "System",
    "keywords": "folder lock"
  },
  {
    "id": "FolderMinus",
    "name": "FolderMinus",
    "category": "System",
    "keywords": "folder minus"
  },
  {
    "id": "FolderOpen",
    "name": "FolderOpen",
    "category": "Design",
    "keywords": "folder open"
  },
  {
    "id": "FolderOpenDot",
    "name": "FolderOpenDot",
    "category": "Design",
    "keywords": "folder open dot"
  },
  {
    "id": "FolderOutput",
    "name": "FolderOutput",
    "category": "System",
    "keywords": "folder output"
  },
  {
    "id": "FolderPen",
    "name": "FolderPen",
    "category": "Design",
    "keywords": "folder pen"
  },
  {
    "id": "FolderPlus",
    "name": "FolderPlus",
    "category": "System",
    "keywords": "folder plus"
  },
  {
    "id": "FolderRoot",
    "name": "FolderRoot",
    "category": "System",
    "keywords": "folder root"
  },
  {
    "id": "FolderSearch",
    "name": "FolderSearch",
    "category": "System",
    "keywords": "folder search"
  },
  {
    "id": "FolderSearch2",
    "name": "FolderSearch2",
    "category": "System",
    "keywords": "folder search2"
  },
  {
    "id": "FolderSymlink",
    "name": "FolderSymlink",
    "category": "System",
    "keywords": "folder symlink"
  },
  {
    "id": "FolderSync",
    "name": "FolderSync",
    "category": "System",
    "keywords": "folder sync"
  },
  {
    "id": "FolderTree",
    "name": "FolderTree",
    "category": "System",
    "keywords": "folder tree"
  },
  {
    "id": "FolderUp",
    "name": "FolderUp",
    "category": "System",
    "keywords": "folder up"
  },
  {
    "id": "FolderX",
    "name": "FolderX",
    "category": "System",
    "keywords": "folder x"
  },
  {
    "id": "Folders",
    "name": "Folders",
    "category": "System",
    "keywords": "folders"
  },
  {
    "id": "Footprints",
    "name": "Footprints",
    "category": "General",
    "keywords": "footprints"
  },
  {
    "id": "ForkKnife",
    "name": "ForkKnife",
    "category": "General",
    "keywords": "fork knife"
  },
  {
    "id": "ForkKnifeCrossed",
    "name": "ForkKnifeCrossed",
    "category": "Symbols",
    "keywords": "fork knife crossed"
  },
  {
    "id": "Forklift",
    "name": "Forklift",
    "category": "General",
    "keywords": "forklift"
  },
  {
    "id": "FormInput",
    "name": "FormInput",
    "category": "General",
    "keywords": "form input"
  },
  {
    "id": "Forward",
    "name": "Forward",
    "category": "General",
    "keywords": "forward"
  },
  {
    "id": "Frame",
    "name": "Frame",
    "category": "General",
    "keywords": "frame"
  },
  {
    "id": "Framer",
    "name": "Framer",
    "category": "General",
    "keywords": "framer"
  },
  {
    "id": "Frown",
    "name": "Frown",
    "category": "General",
    "keywords": "frown"
  },
  {
    "id": "Fuel",
    "name": "Fuel",
    "category": "General",
    "keywords": "fuel"
  },
  {
    "id": "Fullscreen",
    "name": "Fullscreen",
    "category": "Devices",
    "keywords": "fullscreen"
  },
  {
    "id": "FunctionSquare",
    "name": "FunctionSquare",
    "category": "General",
    "keywords": "function square"
  },
  {
    "id": "Funnel",
    "name": "Funnel",
    "category": "General",
    "keywords": "funnel"
  },
  {
    "id": "FunnelPlus",
    "name": "FunnelPlus",
    "category": "Symbols",
    "keywords": "funnel plus"
  },
  {
    "id": "FunnelX",
    "name": "FunnelX",
    "category": "General",
    "keywords": "funnel x"
  },
  {
    "id": "GalleryHorizontal",
    "name": "GalleryHorizontal",
    "category": "General",
    "keywords": "gallery horizontal"
  },
  {
    "id": "GalleryHorizontalEnd",
    "name": "GalleryHorizontalEnd",
    "category": "General",
    "keywords": "gallery horizontal end"
  },
  {
    "id": "GalleryThumbnails",
    "name": "GalleryThumbnails",
    "category": "General",
    "keywords": "gallery thumbnails"
  },
  {
    "id": "GalleryVertical",
    "name": "GalleryVertical",
    "category": "General",
    "keywords": "gallery vertical"
  },
  {
    "id": "GalleryVerticalEnd",
    "name": "GalleryVerticalEnd",
    "category": "General",
    "keywords": "gallery vertical end"
  },
  {
    "id": "Gamepad",
    "name": "Gamepad",
    "category": "Devices",
    "keywords": "gamepad"
  },
  {
    "id": "Gamepad2",
    "name": "Gamepad2",
    "category": "Devices",
    "keywords": "gamepad2"
  },
  {
    "id": "GanttChart",
    "name": "GanttChart",
    "category": "Design",
    "keywords": "gantt chart"
  },
  {
    "id": "GanttChartSquare",
    "name": "GanttChartSquare",
    "category": "Design",
    "keywords": "gantt chart square"
  },
  {
    "id": "Gauge",
    "name": "Gauge",
    "category": "General",
    "keywords": "gauge"
  },
  {
    "id": "GaugeCircle",
    "name": "GaugeCircle",
    "category": "General",
    "keywords": "gauge circle"
  },
  {
    "id": "Gavel",
    "name": "Gavel",
    "category": "General",
    "keywords": "gavel"
  },
  {
    "id": "Gem",
    "name": "Gem",
    "category": "General",
    "keywords": "gem"
  },
  {
    "id": "GeorgianLari",
    "name": "GeorgianLari",
    "category": "General",
    "keywords": "georgian lari"
  },
  {
    "id": "Ghost",
    "name": "Ghost",
    "category": "General",
    "keywords": "ghost"
  },
  {
    "id": "Gift",
    "name": "Gift",
    "category": "General",
    "keywords": "gift"
  },
  {
    "id": "GitBranch",
    "name": "GitBranch",
    "category": "System",
    "keywords": "git branch"
  },
  {
    "id": "GitBranchPlus",
    "name": "GitBranchPlus",
    "category": "System",
    "keywords": "git branch plus"
  },
  {
    "id": "GitCommit",
    "name": "GitCommit",
    "category": "System",
    "keywords": "git commit"
  },
  {
    "id": "GitCommitHorizontal",
    "name": "GitCommitHorizontal",
    "category": "System",
    "keywords": "git commit horizontal"
  },
  {
    "id": "GitCommitVertical",
    "name": "GitCommitVertical",
    "category": "Media",
    "keywords": "git commit vertical"
  },
  {
    "id": "GitCompare",
    "name": "GitCompare",
    "category": "System",
    "keywords": "git compare"
  },
  {
    "id": "GitCompareArrows",
    "name": "GitCompareArrows",
    "category": "Navigation",
    "keywords": "git compare arrows"
  },
  {
    "id": "GitFork",
    "name": "GitFork",
    "category": "System",
    "keywords": "git fork"
  },
  {
    "id": "GitGraph",
    "name": "GitGraph",
    "category": "System",
    "keywords": "git graph"
  },
  {
    "id": "GitMerge",
    "name": "GitMerge",
    "category": "System",
    "keywords": "git merge"
  },
  {
    "id": "GitPullRequest",
    "name": "GitPullRequest",
    "category": "System",
    "keywords": "git pull request"
  },
  {
    "id": "GitPullRequestArrow",
    "name": "GitPullRequestArrow",
    "category": "Navigation",
    "keywords": "git pull request arrow"
  },
  {
    "id": "GitPullRequestClosed",
    "name": "GitPullRequestClosed",
    "category": "System",
    "keywords": "git pull request closed"
  },
  {
    "id": "GitPullRequestCreate",
    "name": "GitPullRequestCreate",
    "category": "System",
    "keywords": "git pull request create"
  },
  {
    "id": "GitPullRequestCreateArrow",
    "name": "GitPullRequestCreateArrow",
    "category": "Navigation",
    "keywords": "git pull request create arrow"
  },
  {
    "id": "GitPullRequestDraft",
    "name": "GitPullRequestDraft",
    "category": "System",
    "keywords": "git pull request draft"
  },
  {
    "id": "Github",
    "name": "Github",
    "category": "System",
    "keywords": "github"
  },
  {
    "id": "Gitlab",
    "name": "Gitlab",
    "category": "System",
    "keywords": "gitlab"
  },
  {
    "id": "GlassWater",
    "name": "GlassWater",
    "category": "General",
    "keywords": "glass water"
  },
  {
    "id": "Glasses",
    "name": "Glasses",
    "category": "General",
    "keywords": "glasses"
  },
  {
    "id": "Globe",
    "name": "Globe",
    "category": "Symbols",
    "keywords": "globe"
  },
  {
    "id": "Globe2",
    "name": "Globe2",
    "category": "Symbols",
    "keywords": "globe2"
  },
  {
    "id": "GlobeLock",
    "name": "GlobeLock",
    "category": "System",
    "keywords": "globe lock"
  },
  {
    "id": "Goal",
    "name": "Goal",
    "category": "General",
    "keywords": "goal"
  },
  {
    "id": "Gpu",
    "name": "Gpu",
    "category": "General",
    "keywords": "gpu"
  },
  {
    "id": "Grab",
    "name": "Grab",
    "category": "General",
    "keywords": "grab"
  },
  {
    "id": "GraduationCap",
    "name": "GraduationCap",
    "category": "General",
    "keywords": "graduation cap"
  },
  {
    "id": "Grape",
    "name": "Grape",
    "category": "General",
    "keywords": "grape"
  },
  {
    "id": "Grid",
    "name": "Grid",
    "category": "General",
    "keywords": "grid"
  },
  {
    "id": "Grid2X2",
    "name": "Grid2X2",
    "category": "General",
    "keywords": "grid2 x2"
  },
  {
    "id": "Grid2X2Check",
    "name": "Grid2X2Check",
    "category": "Symbols",
    "keywords": "grid2 x2 check"
  },
  {
    "id": "Grid2X2Plus",
    "name": "Grid2X2Plus",
    "category": "Symbols",
    "keywords": "grid2 x2 plus"
  },
  {
    "id": "Grid2X2X",
    "name": "Grid2X2X",
    "category": "General",
    "keywords": "grid2 x2 x"
  },
  {
    "id": "Grid2x2",
    "name": "Grid2x2",
    "category": "General",
    "keywords": "grid2x2"
  },
  {
    "id": "Grid2x2Check",
    "name": "Grid2x2Check",
    "category": "Symbols",
    "keywords": "grid2x2 check"
  },
  {
    "id": "Grid2x2Plus",
    "name": "Grid2x2Plus",
    "category": "Symbols",
    "keywords": "grid2x2 plus"
  },
  {
    "id": "Grid2x2X",
    "name": "Grid2x2X",
    "category": "General",
    "keywords": "grid2x2 x"
  },
  {
    "id": "Grid3X3",
    "name": "Grid3X3",
    "category": "General",
    "keywords": "grid3 x3"
  },
  {
    "id": "Grid3x2",
    "name": "Grid3x2",
    "category": "General",
    "keywords": "grid3x2"
  },
  {
    "id": "Grid3x3",
    "name": "Grid3x3",
    "category": "General",
    "keywords": "grid3x3"
  },
  {
    "id": "Grip",
    "name": "Grip",
    "category": "General",
    "keywords": "grip"
  },
  {
    "id": "GripHorizontal",
    "name": "GripHorizontal",
    "category": "General",
    "keywords": "grip horizontal"
  },
  {
    "id": "GripVertical",
    "name": "GripVertical",
    "category": "General",
    "keywords": "grip vertical"
  },
  {
    "id": "Group",
    "name": "Group",
    "category": "General",
    "keywords": "group"
  },
  {
    "id": "Guitar",
    "name": "Guitar",
    "category": "General",
    "keywords": "guitar"
  },
  {
    "id": "Ham",
    "name": "Ham",
    "category": "General",
    "keywords": "ham"
  },
  {
    "id": "Hamburger",
    "name": "Hamburger",
    "category": "General",
    "keywords": "hamburger"
  },
  {
    "id": "Hammer",
    "name": "Hammer",
    "category": "System",
    "keywords": "hammer"
  },
  {
    "id": "Hand",
    "name": "Hand",
    "category": "General",
    "keywords": "hand"
  },
  {
    "id": "HandCoins",
    "name": "HandCoins",
    "category": "General",
    "keywords": "hand coins"
  },
  {
    "id": "HandFist",
    "name": "HandFist",
    "category": "General",
    "keywords": "hand fist"
  },
  {
    "id": "HandGrab",
    "name": "HandGrab",
    "category": "General",
    "keywords": "hand grab"
  },
  {
    "id": "HandHeart",
    "name": "HandHeart",
    "category": "Design",
    "keywords": "hand heart"
  },
  {
    "id": "HandHelping",
    "name": "HandHelping",
    "category": "Symbols",
    "keywords": "hand helping"
  },
  {
    "id": "HandMetal",
    "name": "HandMetal",
    "category": "General",
    "keywords": "hand metal"
  },
  {
    "id": "HandPlatter",
    "name": "HandPlatter",
    "category": "General",
    "keywords": "hand platter"
  },
  {
    "id": "Handbag",
    "name": "Handbag",
    "category": "General",
    "keywords": "handbag"
  },
  {
    "id": "Handshake",
    "name": "Handshake",
    "category": "General",
    "keywords": "handshake"
  },
  {
    "id": "HardDrive",
    "name": "HardDrive",
    "category": "Devices",
    "keywords": "hard drive"
  },
  {
    "id": "HardDriveDownload",
    "name": "HardDriveDownload",
    "category": "Devices",
    "keywords": "hard drive download"
  },
  {
    "id": "HardDriveUpload",
    "name": "HardDriveUpload",
    "category": "Devices",
    "keywords": "hard drive upload"
  },
  {
    "id": "HardHat",
    "name": "HardHat",
    "category": "General",
    "keywords": "hard hat"
  },
  {
    "id": "Hash",
    "name": "Hash",
    "category": "General",
    "keywords": "hash"
  },
  {
    "id": "HatGlasses",
    "name": "HatGlasses",
    "category": "General",
    "keywords": "hat glasses"
  },
  {
    "id": "Haze",
    "name": "Haze",
    "category": "General",
    "keywords": "haze"
  },
  {
    "id": "HdmiPort",
    "name": "HdmiPort",
    "category": "General",
    "keywords": "hdmi port"
  },
  {
    "id": "Heading",
    "name": "Heading",
    "category": "General",
    "keywords": "heading"
  },
  {
    "id": "Heading1",
    "name": "Heading1",
    "category": "General",
    "keywords": "heading1"
  },
  {
    "id": "Heading2",
    "name": "Heading2",
    "category": "General",
    "keywords": "heading2"
  },
  {
    "id": "Heading3",
    "name": "Heading3",
    "category": "General",
    "keywords": "heading3"
  },
  {
    "id": "Heading4",
    "name": "Heading4",
    "category": "General",
    "keywords": "heading4"
  },
  {
    "id": "Heading5",
    "name": "Heading5",
    "category": "General",
    "keywords": "heading5"
  },
  {
    "id": "Heading6",
    "name": "Heading6",
    "category": "General",
    "keywords": "heading6"
  },
  {
    "id": "HeadphoneOff",
    "name": "HeadphoneOff",
    "category": "Media",
    "keywords": "headphone off"
  },
  {
    "id": "Headphones",
    "name": "Headphones",
    "category": "Media",
    "keywords": "headphones"
  },
  {
    "id": "Headset",
    "name": "Headset",
    "category": "General",
    "keywords": "headset"
  },
  {
    "id": "Heart",
    "name": "Heart",
    "category": "Design",
    "keywords": "heart"
  },
  {
    "id": "HeartCrack",
    "name": "HeartCrack",
    "category": "Design",
    "keywords": "heart crack"
  },
  {
    "id": "HeartHandshake",
    "name": "HeartHandshake",
    "category": "Design",
    "keywords": "heart handshake"
  },
  {
    "id": "HeartMinus",
    "name": "HeartMinus",
    "category": "Design",
    "keywords": "heart minus"
  },
  {
    "id": "HeartOff",
    "name": "HeartOff",
    "category": "Design",
    "keywords": "heart off"
  },
  {
    "id": "HeartPlus",
    "name": "HeartPlus",
    "category": "Design",
    "keywords": "heart plus"
  },
  {
    "id": "HeartPulse",
    "name": "HeartPulse",
    "category": "Design",
    "keywords": "heart pulse"
  },
  {
    "id": "Heater",
    "name": "Heater",
    "category": "General",
    "keywords": "heater"
  },
  {
    "id": "HelpCircle",
    "name": "HelpCircle",
    "category": "Symbols",
    "keywords": "help circle"
  },
  {
    "id": "HelpingHand",
    "name": "HelpingHand",
    "category": "Symbols",
    "keywords": "helping hand"
  },
  {
    "id": "Hexagon",
    "name": "Hexagon",
    "category": "General",
    "keywords": "hexagon"
  },
  {
    "id": "Highlighter",
    "name": "Highlighter",
    "category": "General",
    "keywords": "highlighter"
  },
  {
    "id": "History",
    "name": "History",
    "category": "General",
    "keywords": "history"
  },
  {
    "id": "Home",
    "name": "Home",
    "category": "General",
    "keywords": "home"
  },
  {
    "id": "Hop",
    "name": "Hop",
    "category": "General",
    "keywords": "hop"
  },
  {
    "id": "HopOff",
    "name": "HopOff",
    "category": "General",
    "keywords": "hop off"
  },
  {
    "id": "Hospital",
    "name": "Hospital",
    "category": "General",
    "keywords": "hospital"
  },
  {
    "id": "Hotel",
    "name": "Hotel",
    "category": "General",
    "keywords": "hotel"
  },
  {
    "id": "Hourglass",
    "name": "Hourglass",
    "category": "General",
    "keywords": "hourglass"
  },
  {
    "id": "House",
    "name": "House",
    "category": "General",
    "keywords": "house"
  },
  {
    "id": "HouseHeart",
    "name": "HouseHeart",
    "category": "Design",
    "keywords": "house heart"
  },
  {
    "id": "HousePlug",
    "name": "HousePlug",
    "category": "General",
    "keywords": "house plug"
  },
  {
    "id": "HousePlus",
    "name": "HousePlus",
    "category": "Symbols",
    "keywords": "house plus"
  },
  {
    "id": "HouseWifi",
    "name": "HouseWifi",
    "category": "Devices",
    "keywords": "house wifi"
  },
  {
    "id": "IceCream",
    "name": "IceCream",
    "category": "General",
    "keywords": "ice cream"
  },
  {
    "id": "IceCream2",
    "name": "IceCream2",
    "category": "General",
    "keywords": "ice cream2"
  },
  {
    "id": "IceCreamBowl",
    "name": "IceCreamBowl",
    "category": "General",
    "keywords": "ice cream bowl"
  },
  {
    "id": "IceCreamCone",
    "name": "IceCreamCone",
    "category": "General",
    "keywords": "ice cream cone"
  },
  {
    "id": "IdCard",
    "name": "IdCard",
    "category": "General",
    "keywords": "id card"
  },
  {
    "id": "IdCardLanyard",
    "name": "IdCardLanyard",
    "category": "General",
    "keywords": "id card lanyard"
  },
  {
    "id": "Image",
    "name": "Image",
    "category": "General",
    "keywords": "image"
  },
  {
    "id": "ImageDown",
    "name": "ImageDown",
    "category": "General",
    "keywords": "image down"
  },
  {
    "id": "ImageMinus",
    "name": "ImageMinus",
    "category": "Symbols",
    "keywords": "image minus"
  },
  {
    "id": "ImageOff",
    "name": "ImageOff",
    "category": "General",
    "keywords": "image off"
  },
  {
    "id": "ImagePlay",
    "name": "ImagePlay",
    "category": "Media",
    "keywords": "image play"
  },
  {
    "id": "ImagePlus",
    "name": "ImagePlus",
    "category": "Symbols",
    "keywords": "image plus"
  },
  {
    "id": "ImageUp",
    "name": "ImageUp",
    "category": "General",
    "keywords": "image up"
  },
  {
    "id": "ImageUpscale",
    "name": "ImageUpscale",
    "category": "General",
    "keywords": "image upscale"
  },
  {
    "id": "Images",
    "name": "Images",
    "category": "General",
    "keywords": "images"
  },
  {
    "id": "Import",
    "name": "Import",
    "category": "General",
    "keywords": "import"
  },
  {
    "id": "Inbox",
    "name": "Inbox",
    "category": "General",
    "keywords": "inbox"
  },
  {
    "id": "Indent",
    "name": "Indent",
    "category": "General",
    "keywords": "indent"
  },
  {
    "id": "IndentDecrease",
    "name": "IndentDecrease",
    "category": "General",
    "keywords": "indent decrease"
  },
  {
    "id": "IndentIncrease",
    "name": "IndentIncrease",
    "category": "General",
    "keywords": "indent increase"
  },
  {
    "id": "IndianRupee",
    "name": "IndianRupee",
    "category": "General",
    "keywords": "indian rupee"
  },
  {
    "id": "Infinity",
    "name": "Infinity",
    "category": "General",
    "keywords": "infinity"
  },
  {
    "id": "Info",
    "name": "Info",
    "category": "Symbols",
    "keywords": "info"
  },
  {
    "id": "Inspect",
    "name": "Inspect",
    "category": "General",
    "keywords": "inspect"
  },
  {
    "id": "InspectionPanel",
    "name": "InspectionPanel",
    "category": "General",
    "keywords": "inspection panel"
  },
  {
    "id": "Instagram",
    "name": "Instagram",
    "category": "Symbols",
    "keywords": "instagram"
  },
  {
    "id": "Italic",
    "name": "Italic",
    "category": "General",
    "keywords": "italic"
  },
  {
    "id": "IterationCcw",
    "name": "IterationCcw",
    "category": "General",
    "keywords": "iteration ccw"
  },
  {
    "id": "IterationCw",
    "name": "IterationCw",
    "category": "General",
    "keywords": "iteration cw"
  },
  {
    "id": "JapaneseYen",
    "name": "JapaneseYen",
    "category": "Symbols",
    "keywords": "japanese yen"
  },
  {
    "id": "Joystick",
    "name": "Joystick",
    "category": "Devices",
    "keywords": "joystick"
  },
  {
    "id": "Kanban",
    "name": "Kanban",
    "category": "General",
    "keywords": "kanban"
  },
  {
    "id": "KanbanSquare",
    "name": "KanbanSquare",
    "category": "General",
    "keywords": "kanban square"
  },
  {
    "id": "KanbanSquareDashed",
    "name": "KanbanSquareDashed",
    "category": "General",
    "keywords": "kanban square dashed"
  },
  {
    "id": "Kayak",
    "name": "Kayak",
    "category": "General",
    "keywords": "kayak"
  },
  {
    "id": "Key",
    "name": "Key",
    "category": "System",
    "keywords": "key"
  },
  {
    "id": "KeyRound",
    "name": "KeyRound",
    "category": "System",
    "keywords": "key round"
  },
  {
    "id": "KeySquare",
    "name": "KeySquare",
    "category": "System",
    "keywords": "key square"
  },
  {
    "id": "Keyboard",
    "name": "Keyboard",
    "category": "Devices",
    "keywords": "keyboard"
  },
  {
    "id": "KeyboardMusic",
    "name": "KeyboardMusic",
    "category": "Media",
    "keywords": "keyboard music"
  },
  {
    "id": "KeyboardOff",
    "name": "KeyboardOff",
    "category": "Devices",
    "keywords": "keyboard off"
  },
  {
    "id": "Lamp",
    "name": "Lamp",
    "category": "General",
    "keywords": "lamp"
  },
  {
    "id": "LampCeiling",
    "name": "LampCeiling",
    "category": "General",
    "keywords": "lamp ceiling"
  },
  {
    "id": "LampDesk",
    "name": "LampDesk",
    "category": "General",
    "keywords": "lamp desk"
  },
  {
    "id": "LampFloor",
    "name": "LampFloor",
    "category": "General",
    "keywords": "lamp floor"
  },
  {
    "id": "LampWallDown",
    "name": "LampWallDown",
    "category": "General",
    "keywords": "lamp wall down"
  },
  {
    "id": "LampWallUp",
    "name": "LampWallUp",
    "category": "General",
    "keywords": "lamp wall up"
  },
  {
    "id": "LandPlot",
    "name": "LandPlot",
    "category": "General",
    "keywords": "land plot"
  },
  {
    "id": "Landmark",
    "name": "Landmark",
    "category": "General",
    "keywords": "landmark"
  },
  {
    "id": "Languages",
    "name": "Languages",
    "category": "General",
    "keywords": "languages"
  },
  {
    "id": "Laptop",
    "name": "Laptop",
    "category": "Devices",
    "keywords": "laptop"
  },
  {
    "id": "Laptop2",
    "name": "Laptop2",
    "category": "Devices",
    "keywords": "laptop2"
  },
  {
    "id": "LaptopMinimal",
    "name": "LaptopMinimal",
    "category": "Devices",
    "keywords": "laptop minimal"
  },
  {
    "id": "LaptopMinimalCheck",
    "name": "LaptopMinimalCheck",
    "category": "Devices",
    "keywords": "laptop minimal check"
  },
  {
    "id": "Lasso",
    "name": "Lasso",
    "category": "Design",
    "keywords": "lasso"
  },
  {
    "id": "LassoSelect",
    "name": "LassoSelect",
    "category": "Design",
    "keywords": "lasso select"
  },
  {
    "id": "Laugh",
    "name": "Laugh",
    "category": "General",
    "keywords": "laugh"
  },
  {
    "id": "Layers",
    "name": "Layers",
    "category": "Design",
    "keywords": "layers"
  },
  {
    "id": "Layers2",
    "name": "Layers2",
    "category": "Design",
    "keywords": "layers2"
  },
  {
    "id": "Layers3",
    "name": "Layers3",
    "category": "Design",
    "keywords": "layers3"
  },
  {
    "id": "Layout",
    "name": "Layout",
    "category": "General",
    "keywords": "layout"
  },
  {
    "id": "LayoutDashboard",
    "name": "LayoutDashboard",
    "category": "General",
    "keywords": "layout dashboard"
  },
  {
    "id": "LayoutGrid",
    "name": "LayoutGrid",
    "category": "General",
    "keywords": "layout grid"
  },
  {
    "id": "LayoutList",
    "name": "LayoutList",
    "category": "General",
    "keywords": "layout list"
  },
  {
    "id": "LayoutPanelLeft",
    "name": "LayoutPanelLeft",
    "category": "General",
    "keywords": "layout panel left"
  },
  {
    "id": "LayoutPanelTop",
    "name": "LayoutPanelTop",
    "category": "General",
    "keywords": "layout panel top"
  },
  {
    "id": "LayoutTemplate",
    "name": "LayoutTemplate",
    "category": "General",
    "keywords": "layout template"
  },
  {
    "id": "Leaf",
    "name": "Leaf",
    "category": "General",
    "keywords": "leaf"
  },
  {
    "id": "LeafyGreen",
    "name": "LeafyGreen",
    "category": "General",
    "keywords": "leafy green"
  },
  {
    "id": "Lectern",
    "name": "Lectern",
    "category": "General",
    "keywords": "lectern"
  },
  {
    "id": "LetterText",
    "name": "LetterText",
    "category": "General",
    "keywords": "letter text"
  },
  {
    "id": "Library",
    "name": "Library",
    "category": "General",
    "keywords": "library"
  },
  {
    "id": "LibraryBig",
    "name": "LibraryBig",
    "category": "General",
    "keywords": "library big"
  },
  {
    "id": "LibrarySquare",
    "name": "LibrarySquare",
    "category": "General",
    "keywords": "library square"
  },
  {
    "id": "LifeBuoy",
    "name": "LifeBuoy",
    "category": "General",
    "keywords": "life buoy"
  },
  {
    "id": "Ligature",
    "name": "Ligature",
    "category": "General",
    "keywords": "ligature"
  },
  {
    "id": "Lightbulb",
    "name": "Lightbulb",
    "category": "General",
    "keywords": "lightbulb"
  },
  {
    "id": "LightbulbOff",
    "name": "LightbulbOff",
    "category": "General",
    "keywords": "lightbulb off"
  },
  {
    "id": "LineChart",
    "name": "LineChart",
    "category": "Design",
    "keywords": "line chart"
  },
  {
    "id": "LineSquiggle",
    "name": "LineSquiggle",
    "category": "General",
    "keywords": "line squiggle"
  },
  {
    "id": "Link",
    "name": "Link",
    "category": "Symbols",
    "keywords": "link"
  },
  {
    "id": "Link2",
    "name": "Link2",
    "category": "Symbols",
    "keywords": "link2"
  },
  {
    "id": "Link2Off",
    "name": "Link2Off",
    "category": "Symbols",
    "keywords": "link2 off"
  },
  {
    "id": "Linkedin",
    "name": "Linkedin",
    "category": "Symbols",
    "keywords": "linkedin"
  },
  {
    "id": "List",
    "name": "List",
    "category": "General",
    "keywords": "list"
  },
  {
    "id": "ListCheck",
    "name": "ListCheck",
    "category": "Symbols",
    "keywords": "list check"
  },
  {
    "id": "ListChecks",
    "name": "ListChecks",
    "category": "Symbols",
    "keywords": "list checks"
  },
  {
    "id": "ListChevronsDownUp",
    "name": "ListChevronsDownUp",
    "category": "Navigation",
    "keywords": "list chevrons down up"
  },
  {
    "id": "ListChevronsUpDown",
    "name": "ListChevronsUpDown",
    "category": "Navigation",
    "keywords": "list chevrons up down"
  },
  {
    "id": "ListCollapse",
    "name": "ListCollapse",
    "category": "General",
    "keywords": "list collapse"
  },
  {
    "id": "ListEnd",
    "name": "ListEnd",
    "category": "General",
    "keywords": "list end"
  },
  {
    "id": "ListFilter",
    "name": "ListFilter",
    "category": "General",
    "keywords": "list filter"
  },
  {
    "id": "ListFilterPlus",
    "name": "ListFilterPlus",
    "category": "Symbols",
    "keywords": "list filter plus"
  },
  {
    "id": "ListIndentDecrease",
    "name": "ListIndentDecrease",
    "category": "General",
    "keywords": "list indent decrease"
  },
  {
    "id": "ListIndentIncrease",
    "name": "ListIndentIncrease",
    "category": "General",
    "keywords": "list indent increase"
  },
  {
    "id": "ListMinus",
    "name": "ListMinus",
    "category": "Symbols",
    "keywords": "list minus"
  },
  {
    "id": "ListMusic",
    "name": "ListMusic",
    "category": "Media",
    "keywords": "list music"
  },
  {
    "id": "ListOrdered",
    "name": "ListOrdered",
    "category": "General",
    "keywords": "list ordered"
  },
  {
    "id": "ListPlus",
    "name": "ListPlus",
    "category": "Symbols",
    "keywords": "list plus"
  },
  {
    "id": "ListRestart",
    "name": "ListRestart",
    "category": "Design",
    "keywords": "list restart"
  },
  {
    "id": "ListStart",
    "name": "ListStart",
    "category": "Design",
    "keywords": "list start"
  },
  {
    "id": "ListTodo",
    "name": "ListTodo",
    "category": "General",
    "keywords": "list todo"
  },
  {
    "id": "ListTree",
    "name": "ListTree",
    "category": "General",
    "keywords": "list tree"
  },
  {
    "id": "ListVideo",
    "name": "ListVideo",
    "category": "Media",
    "keywords": "list video"
  },
  {
    "id": "ListX",
    "name": "ListX",
    "category": "General",
    "keywords": "list x"
  },
  {
    "id": "Loader",
    "name": "Loader",
    "category": "General",
    "keywords": "loader"
  },
  {
    "id": "Loader2",
    "name": "Loader2",
    "category": "General",
    "keywords": "loader2"
  },
  {
    "id": "LoaderCircle",
    "name": "LoaderCircle",
    "category": "General",
    "keywords": "loader circle"
  },
  {
    "id": "LoaderPinwheel",
    "name": "LoaderPinwheel",
    "category": "General",
    "keywords": "loader pinwheel"
  },
  {
    "id": "Locate",
    "name": "Locate",
    "category": "Navigation",
    "keywords": "locate"
  },
  {
    "id": "LocateFixed",
    "name": "LocateFixed",
    "category": "Navigation",
    "keywords": "locate fixed"
  },
  {
    "id": "LocateOff",
    "name": "LocateOff",
    "category": "Navigation",
    "keywords": "locate off"
  },
  {
    "id": "LocationEdit",
    "name": "LocationEdit",
    "category": "General",
    "keywords": "location edit"
  },
  {
    "id": "Lock",
    "name": "Lock",
    "category": "System",
    "keywords": "lock"
  },
  {
    "id": "LockKeyhole",
    "name": "LockKeyhole",
    "category": "System",
    "keywords": "lock keyhole"
  },
  {
    "id": "LockKeyholeOpen",
    "name": "LockKeyholeOpen",
    "category": "Design",
    "keywords": "lock keyhole open"
  },
  {
    "id": "LockOpen",
    "name": "LockOpen",
    "category": "Design",
    "keywords": "lock open"
  },
  {
    "id": "LogIn",
    "name": "LogIn",
    "category": "General",
    "keywords": "log in"
  },
  {
    "id": "LogOut",
    "name": "LogOut",
    "category": "General",
    "keywords": "log out"
  },
  {
    "id": "Logs",
    "name": "Logs",
    "category": "General",
    "keywords": "logs"
  },
  {
    "id": "Lollipop",
    "name": "Lollipop",
    "category": "General",
    "keywords": "lollipop"
  },
  {
    "id": "LucideAArrowDown",
    "name": "LucideAArrowDown",
    "category": "Navigation",
    "keywords": "lucide a arrow down"
  },
  {
    "id": "LucideAArrowUp",
    "name": "LucideAArrowUp",
    "category": "Navigation",
    "keywords": "lucide a arrow up"
  },
  {
    "id": "LucideALargeSmall",
    "name": "LucideALargeSmall",
    "category": "General",
    "keywords": "lucide a large small"
  },
  {
    "id": "LucideAccessibility",
    "name": "LucideAccessibility",
    "category": "General",
    "keywords": "lucide accessibility"
  },
  {
    "id": "LucideActivity",
    "name": "LucideActivity",
    "category": "General",
    "keywords": "lucide activity"
  },
  {
    "id": "LucideActivitySquare",
    "name": "LucideActivitySquare",
    "category": "General",
    "keywords": "lucide activity square"
  },
  {
    "id": "LucideAirVent",
    "name": "LucideAirVent",
    "category": "General",
    "keywords": "lucide air vent"
  },
  {
    "id": "LucideAirplay",
    "name": "LucideAirplay",
    "category": "Media",
    "keywords": "lucide airplay"
  },
  {
    "id": "LucideAlarmCheck",
    "name": "LucideAlarmCheck",
    "category": "Symbols",
    "keywords": "lucide alarm check"
  },
  {
    "id": "LucideAlarmClock",
    "name": "LucideAlarmClock",
    "category": "System",
    "keywords": "lucide alarm clock"
  },
  {
    "id": "LucideAlarmClockCheck",
    "name": "LucideAlarmClockCheck",
    "category": "System",
    "keywords": "lucide alarm clock check"
  },
  {
    "id": "LucideAlarmClockMinus",
    "name": "LucideAlarmClockMinus",
    "category": "System",
    "keywords": "lucide alarm clock minus"
  },
  {
    "id": "LucideAlarmClockOff",
    "name": "LucideAlarmClockOff",
    "category": "System",
    "keywords": "lucide alarm clock off"
  },
  {
    "id": "LucideAlarmClockPlus",
    "name": "LucideAlarmClockPlus",
    "category": "System",
    "keywords": "lucide alarm clock plus"
  },
  {
    "id": "LucideAlarmMinus",
    "name": "LucideAlarmMinus",
    "category": "Symbols",
    "keywords": "lucide alarm minus"
  },
  {
    "id": "LucideAlarmPlus",
    "name": "LucideAlarmPlus",
    "category": "Symbols",
    "keywords": "lucide alarm plus"
  },
  {
    "id": "LucideAlarmSmoke",
    "name": "LucideAlarmSmoke",
    "category": "General",
    "keywords": "lucide alarm smoke"
  },
  {
    "id": "LucideAlbum",
    "name": "LucideAlbum",
    "category": "Media",
    "keywords": "lucide album"
  },
  {
    "id": "LucideAlertCircle",
    "name": "LucideAlertCircle",
    "category": "Symbols",
    "keywords": "lucide alert circle"
  },
  {
    "id": "LucideAlertOctagon",
    "name": "LucideAlertOctagon",
    "category": "Symbols",
    "keywords": "lucide alert octagon"
  },
  {
    "id": "LucideAlertTriangle",
    "name": "LucideAlertTriangle",
    "category": "Symbols",
    "keywords": "lucide alert triangle"
  },
  {
    "id": "LucideAlignCenter",
    "name": "LucideAlignCenter",
    "category": "General",
    "keywords": "lucide align center"
  },
  {
    "id": "LucideAlignCenterHorizontal",
    "name": "LucideAlignCenterHorizontal",
    "category": "General",
    "keywords": "lucide align center horizontal"
  },
  {
    "id": "LucideAlignCenterVertical",
    "name": "LucideAlignCenterVertical",
    "category": "General",
    "keywords": "lucide align center vertical"
  },
  {
    "id": "LucideAlignEndHorizontal",
    "name": "LucideAlignEndHorizontal",
    "category": "General",
    "keywords": "lucide align end horizontal"
  },
  {
    "id": "LucideAlignEndVertical",
    "name": "LucideAlignEndVertical",
    "category": "General",
    "keywords": "lucide align end vertical"
  },
  {
    "id": "LucideAlignHorizontalDistributeCenter",
    "name": "LucideAlignHorizontalDistributeCenter",
    "category": "General",
    "keywords": "lucide align horizontal distribute center"
  },
  {
    "id": "LucideAlignHorizontalDistributeEnd",
    "name": "LucideAlignHorizontalDistributeEnd",
    "category": "General",
    "keywords": "lucide align horizontal distribute end"
  },
  {
    "id": "LucideAlignHorizontalDistributeStart",
    "name": "LucideAlignHorizontalDistributeStart",
    "category": "Design",
    "keywords": "lucide align horizontal distribute start"
  },
  {
    "id": "LucideAlignHorizontalJustifyCenter",
    "name": "LucideAlignHorizontalJustifyCenter",
    "category": "General",
    "keywords": "lucide align horizontal justify center"
  },
  {
    "id": "LucideAlignHorizontalJustifyEnd",
    "name": "LucideAlignHorizontalJustifyEnd",
    "category": "General",
    "keywords": "lucide align horizontal justify end"
  },
  {
    "id": "LucideAlignHorizontalJustifyStart",
    "name": "LucideAlignHorizontalJustifyStart",
    "category": "Design",
    "keywords": "lucide align horizontal justify start"
  },
  {
    "id": "LucideAlignHorizontalSpaceAround",
    "name": "LucideAlignHorizontalSpaceAround",
    "category": "General",
    "keywords": "lucide align horizontal space around"
  },
  {
    "id": "LucideAlignHorizontalSpaceBetween",
    "name": "LucideAlignHorizontalSpaceBetween",
    "category": "General",
    "keywords": "lucide align horizontal space between"
  },
  {
    "id": "LucideAlignJustify",
    "name": "LucideAlignJustify",
    "category": "General",
    "keywords": "lucide align justify"
  },
  {
    "id": "LucideAlignLeft",
    "name": "LucideAlignLeft",
    "category": "General",
    "keywords": "lucide align left"
  },
  {
    "id": "LucideAlignRight",
    "name": "LucideAlignRight",
    "category": "General",
    "keywords": "lucide align right"
  },
  {
    "id": "LucideAlignStartHorizontal",
    "name": "LucideAlignStartHorizontal",
    "category": "Design",
    "keywords": "lucide align start horizontal"
  },
  {
    "id": "LucideAlignStartVertical",
    "name": "LucideAlignStartVertical",
    "category": "Media",
    "keywords": "lucide align start vertical"
  },
  {
    "id": "LucideAlignVerticalDistributeCenter",
    "name": "LucideAlignVerticalDistributeCenter",
    "category": "General",
    "keywords": "lucide align vertical distribute center"
  },
  {
    "id": "LucideAlignVerticalDistributeEnd",
    "name": "LucideAlignVerticalDistributeEnd",
    "category": "General",
    "keywords": "lucide align vertical distribute end"
  },
  {
    "id": "LucideAlignVerticalDistributeStart",
    "name": "LucideAlignVerticalDistributeStart",
    "category": "Design",
    "keywords": "lucide align vertical distribute start"
  },
  {
    "id": "LucideAlignVerticalJustifyCenter",
    "name": "LucideAlignVerticalJustifyCenter",
    "category": "General",
    "keywords": "lucide align vertical justify center"
  },
  {
    "id": "LucideAlignVerticalJustifyEnd",
    "name": "LucideAlignVerticalJustifyEnd",
    "category": "General",
    "keywords": "lucide align vertical justify end"
  },
  {
    "id": "LucideAlignVerticalJustifyStart",
    "name": "LucideAlignVerticalJustifyStart",
    "category": "Design",
    "keywords": "lucide align vertical justify start"
  },
  {
    "id": "LucideAlignVerticalSpaceAround",
    "name": "LucideAlignVerticalSpaceAround",
    "category": "General",
    "keywords": "lucide align vertical space around"
  },
  {
    "id": "LucideAlignVerticalSpaceBetween",
    "name": "LucideAlignVerticalSpaceBetween",
    "category": "General",
    "keywords": "lucide align vertical space between"
  },
  {
    "id": "LucideAmbulance",
    "name": "LucideAmbulance",
    "category": "General",
    "keywords": "lucide ambulance"
  },
  {
    "id": "LucideAmpersand",
    "name": "LucideAmpersand",
    "category": "General",
    "keywords": "lucide ampersand"
  },
  {
    "id": "LucideAmpersands",
    "name": "LucideAmpersands",
    "category": "General",
    "keywords": "lucide ampersands"
  },
  {
    "id": "LucideAmphora",
    "name": "LucideAmphora",
    "category": "General",
    "keywords": "lucide amphora"
  },
  {
    "id": "LucideAnchor",
    "name": "LucideAnchor",
    "category": "General",
    "keywords": "lucide anchor"
  },
  {
    "id": "LucideAngry",
    "name": "LucideAngry",
    "category": "General",
    "keywords": "lucide angry"
  },
  {
    "id": "LucideAnnoyed",
    "name": "LucideAnnoyed",
    "category": "General",
    "keywords": "lucide annoyed"
  },
  {
    "id": "LucideAntenna",
    "name": "LucideAntenna",
    "category": "General",
    "keywords": "lucide antenna"
  },
  {
    "id": "LucideAnvil",
    "name": "LucideAnvil",
    "category": "General",
    "keywords": "lucide anvil"
  },
  {
    "id": "LucideAperture",
    "name": "LucideAperture",
    "category": "General",
    "keywords": "lucide aperture"
  },
  {
    "id": "LucideAppWindow",
    "name": "LucideAppWindow",
    "category": "General",
    "keywords": "lucide app window"
  },
  {
    "id": "LucideAppWindowMac",
    "name": "LucideAppWindowMac",
    "category": "General",
    "keywords": "lucide app window mac"
  },
  {
    "id": "LucideApple",
    "name": "LucideApple",
    "category": "General",
    "keywords": "lucide apple"
  },
  {
    "id": "LucideArchive",
    "name": "LucideArchive",
    "category": "General",
    "keywords": "lucide archive"
  },
  {
    "id": "LucideArchiveRestore",
    "name": "LucideArchiveRestore",
    "category": "General",
    "keywords": "lucide archive restore"
  },
  {
    "id": "LucideArchiveX",
    "name": "LucideArchiveX",
    "category": "General",
    "keywords": "lucide archive x"
  },
  {
    "id": "LucideAreaChart",
    "name": "LucideAreaChart",
    "category": "Design",
    "keywords": "lucide area chart"
  },
  {
    "id": "LucideArmchair",
    "name": "LucideArmchair",
    "category": "General",
    "keywords": "lucide armchair"
  },
  {
    "id": "LucideArrowBigDown",
    "name": "LucideArrowBigDown",
    "category": "Navigation",
    "keywords": "lucide arrow big down"
  },
  {
    "id": "LucideArrowBigDownDash",
    "name": "LucideArrowBigDownDash",
    "category": "Navigation",
    "keywords": "lucide arrow big down dash"
  },
  {
    "id": "LucideArrowBigLeft",
    "name": "LucideArrowBigLeft",
    "category": "Navigation",
    "keywords": "lucide arrow big left"
  },
  {
    "id": "LucideArrowBigLeftDash",
    "name": "LucideArrowBigLeftDash",
    "category": "Navigation",
    "keywords": "lucide arrow big left dash"
  },
  {
    "id": "LucideArrowBigRight",
    "name": "LucideArrowBigRight",
    "category": "Navigation",
    "keywords": "lucide arrow big right"
  },
  {
    "id": "LucideArrowBigRightDash",
    "name": "LucideArrowBigRightDash",
    "category": "Navigation",
    "keywords": "lucide arrow big right dash"
  },
  {
    "id": "LucideArrowBigUp",
    "name": "LucideArrowBigUp",
    "category": "Navigation",
    "keywords": "lucide arrow big up"
  },
  {
    "id": "LucideArrowBigUpDash",
    "name": "LucideArrowBigUpDash",
    "category": "Navigation",
    "keywords": "lucide arrow big up dash"
  },
  {
    "id": "LucideArrowDown",
    "name": "LucideArrowDown",
    "category": "Navigation",
    "keywords": "lucide arrow down"
  },
  {
    "id": "LucideArrowDown01",
    "name": "LucideArrowDown01",
    "category": "Navigation",
    "keywords": "lucide arrow down01"
  },
  {
    "id": "LucideArrowDown10",
    "name": "LucideArrowDown10",
    "category": "Navigation",
    "keywords": "lucide arrow down10"
  },
  {
    "id": "LucideArrowDownAZ",
    "name": "LucideArrowDownAZ",
    "category": "Navigation",
    "keywords": "lucide arrow down a z"
  },
  {
    "id": "LucideArrowDownAz",
    "name": "LucideArrowDownAz",
    "category": "Navigation",
    "keywords": "lucide arrow down az"
  },
  {
    "id": "LucideArrowDownCircle",
    "name": "LucideArrowDownCircle",
    "category": "Navigation",
    "keywords": "lucide arrow down circle"
  },
  {
    "id": "LucideArrowDownFromLine",
    "name": "LucideArrowDownFromLine",
    "category": "Navigation",
    "keywords": "lucide arrow down from line"
  },
  {
    "id": "LucideArrowDownLeft",
    "name": "LucideArrowDownLeft",
    "category": "Navigation",
    "keywords": "lucide arrow down left"
  },
  {
    "id": "LucideArrowDownLeftFromCircle",
    "name": "LucideArrowDownLeftFromCircle",
    "category": "Navigation",
    "keywords": "lucide arrow down left from circle"
  },
  {
    "id": "LucideArrowDownLeftFromSquare",
    "name": "LucideArrowDownLeftFromSquare",
    "category": "Navigation",
    "keywords": "lucide arrow down left from square"
  },
  {
    "id": "LucideArrowDownLeftSquare",
    "name": "LucideArrowDownLeftSquare",
    "category": "Navigation",
    "keywords": "lucide arrow down left square"
  },
  {
    "id": "LucideArrowDownNarrowWide",
    "name": "LucideArrowDownNarrowWide",
    "category": "Navigation",
    "keywords": "lucide arrow down narrow wide"
  },
  {
    "id": "LucideArrowDownRight",
    "name": "LucideArrowDownRight",
    "category": "Navigation",
    "keywords": "lucide arrow down right"
  },
  {
    "id": "LucideArrowDownRightFromCircle",
    "name": "LucideArrowDownRightFromCircle",
    "category": "Navigation",
    "keywords": "lucide arrow down right from circle"
  },
  {
    "id": "LucideArrowDownRightFromSquare",
    "name": "LucideArrowDownRightFromSquare",
    "category": "Navigation",
    "keywords": "lucide arrow down right from square"
  },
  {
    "id": "LucideArrowDownRightSquare",
    "name": "LucideArrowDownRightSquare",
    "category": "Navigation",
    "keywords": "lucide arrow down right square"
  },
  {
    "id": "LucideArrowDownSquare",
    "name": "LucideArrowDownSquare",
    "category": "Navigation",
    "keywords": "lucide arrow down square"
  },
  {
    "id": "LucideArrowDownToDot",
    "name": "LucideArrowDownToDot",
    "category": "Navigation",
    "keywords": "lucide arrow down to dot"
  },
  {
    "id": "LucideArrowDownToLine",
    "name": "LucideArrowDownToLine",
    "category": "Navigation",
    "keywords": "lucide arrow down to line"
  },
  {
    "id": "LucideArrowDownUp",
    "name": "LucideArrowDownUp",
    "category": "Navigation",
    "keywords": "lucide arrow down up"
  },
  {
    "id": "LucideArrowDownWideNarrow",
    "name": "LucideArrowDownWideNarrow",
    "category": "Navigation",
    "keywords": "lucide arrow down wide narrow"
  },
  {
    "id": "LucideArrowDownZA",
    "name": "LucideArrowDownZA",
    "category": "Navigation",
    "keywords": "lucide arrow down z a"
  },
  {
    "id": "LucideArrowDownZa",
    "name": "LucideArrowDownZa",
    "category": "Navigation",
    "keywords": "lucide arrow down za"
  },
  {
    "id": "LucideArrowLeft",
    "name": "LucideArrowLeft",
    "category": "Navigation",
    "keywords": "lucide arrow left"
  },
  {
    "id": "LucideArrowLeftCircle",
    "name": "LucideArrowLeftCircle",
    "category": "Navigation",
    "keywords": "lucide arrow left circle"
  },
  {
    "id": "LucideArrowLeftFromLine",
    "name": "LucideArrowLeftFromLine",
    "category": "Navigation",
    "keywords": "lucide arrow left from line"
  },
  {
    "id": "LucideArrowLeftRight",
    "name": "LucideArrowLeftRight",
    "category": "Navigation",
    "keywords": "lucide arrow left right"
  },
  {
    "id": "LucideArrowLeftSquare",
    "name": "LucideArrowLeftSquare",
    "category": "Navigation",
    "keywords": "lucide arrow left square"
  },
  {
    "id": "LucideArrowLeftToLine",
    "name": "LucideArrowLeftToLine",
    "category": "Navigation",
    "keywords": "lucide arrow left to line"
  },
  {
    "id": "LucideArrowRight",
    "name": "LucideArrowRight",
    "category": "Navigation",
    "keywords": "lucide arrow right"
  },
  {
    "id": "LucideArrowRightCircle",
    "name": "LucideArrowRightCircle",
    "category": "Navigation",
    "keywords": "lucide arrow right circle"
  },
  {
    "id": "LucideArrowRightFromLine",
    "name": "LucideArrowRightFromLine",
    "category": "Navigation",
    "keywords": "lucide arrow right from line"
  },
  {
    "id": "LucideArrowRightLeft",
    "name": "LucideArrowRightLeft",
    "category": "Navigation",
    "keywords": "lucide arrow right left"
  },
  {
    "id": "LucideArrowRightSquare",
    "name": "LucideArrowRightSquare",
    "category": "Navigation",
    "keywords": "lucide arrow right square"
  },
  {
    "id": "LucideArrowRightToLine",
    "name": "LucideArrowRightToLine",
    "category": "Navigation",
    "keywords": "lucide arrow right to line"
  },
  {
    "id": "LucideArrowUp",
    "name": "LucideArrowUp",
    "category": "Navigation",
    "keywords": "lucide arrow up"
  },
  {
    "id": "LucideArrowUp01",
    "name": "LucideArrowUp01",
    "category": "Navigation",
    "keywords": "lucide arrow up01"
  },
  {
    "id": "LucideArrowUp10",
    "name": "LucideArrowUp10",
    "category": "Navigation",
    "keywords": "lucide arrow up10"
  },
  {
    "id": "LucideArrowUpAZ",
    "name": "LucideArrowUpAZ",
    "category": "Navigation",
    "keywords": "lucide arrow up a z"
  },
  {
    "id": "LucideArrowUpAz",
    "name": "LucideArrowUpAz",
    "category": "Navigation",
    "keywords": "lucide arrow up az"
  },
  {
    "id": "LucideArrowUpCircle",
    "name": "LucideArrowUpCircle",
    "category": "Navigation",
    "keywords": "lucide arrow up circle"
  },
  {
    "id": "LucideArrowUpDown",
    "name": "LucideArrowUpDown",
    "category": "Navigation",
    "keywords": "lucide arrow up down"
  },
  {
    "id": "LucideArrowUpFromDot",
    "name": "LucideArrowUpFromDot",
    "category": "Navigation",
    "keywords": "lucide arrow up from dot"
  },
  {
    "id": "LucideArrowUpFromLine",
    "name": "LucideArrowUpFromLine",
    "category": "Navigation",
    "keywords": "lucide arrow up from line"
  },
  {
    "id": "LucideArrowUpLeft",
    "name": "LucideArrowUpLeft",
    "category": "Navigation",
    "keywords": "lucide arrow up left"
  },
  {
    "id": "LucideArrowUpLeftFromCircle",
    "name": "LucideArrowUpLeftFromCircle",
    "category": "Navigation",
    "keywords": "lucide arrow up left from circle"
  },
  {
    "id": "LucideArrowUpLeftFromSquare",
    "name": "LucideArrowUpLeftFromSquare",
    "category": "Navigation",
    "keywords": "lucide arrow up left from square"
  },
  {
    "id": "LucideArrowUpLeftSquare",
    "name": "LucideArrowUpLeftSquare",
    "category": "Navigation",
    "keywords": "lucide arrow up left square"
  },
  {
    "id": "LucideArrowUpNarrowWide",
    "name": "LucideArrowUpNarrowWide",
    "category": "Navigation",
    "keywords": "lucide arrow up narrow wide"
  },
  {
    "id": "LucideArrowUpRight",
    "name": "LucideArrowUpRight",
    "category": "Navigation",
    "keywords": "lucide arrow up right"
  },
  {
    "id": "LucideArrowUpRightFromCircle",
    "name": "LucideArrowUpRightFromCircle",
    "category": "Navigation",
    "keywords": "lucide arrow up right from circle"
  },
  {
    "id": "LucideArrowUpRightFromSquare",
    "name": "LucideArrowUpRightFromSquare",
    "category": "Navigation",
    "keywords": "lucide arrow up right from square"
  },
  {
    "id": "LucideArrowUpRightSquare",
    "name": "LucideArrowUpRightSquare",
    "category": "Navigation",
    "keywords": "lucide arrow up right square"
  },
  {
    "id": "LucideArrowUpSquare",
    "name": "LucideArrowUpSquare",
    "category": "Navigation",
    "keywords": "lucide arrow up square"
  },
  {
    "id": "LucideArrowUpToLine",
    "name": "LucideArrowUpToLine",
    "category": "Navigation",
    "keywords": "lucide arrow up to line"
  },
  {
    "id": "LucideArrowUpWideNarrow",
    "name": "LucideArrowUpWideNarrow",
    "category": "Navigation",
    "keywords": "lucide arrow up wide narrow"
  },
  {
    "id": "LucideArrowUpZA",
    "name": "LucideArrowUpZA",
    "category": "Navigation",
    "keywords": "lucide arrow up z a"
  },
  {
    "id": "LucideArrowUpZa",
    "name": "LucideArrowUpZa",
    "category": "Navigation",
    "keywords": "lucide arrow up za"
  },
  {
    "id": "LucideArrowsUpFromLine",
    "name": "LucideArrowsUpFromLine",
    "category": "Navigation",
    "keywords": "lucide arrows up from line"
  },
  {
    "id": "LucideAsterisk",
    "name": "LucideAsterisk",
    "category": "General",
    "keywords": "lucide asterisk"
  },
  {
    "id": "LucideAsteriskSquare",
    "name": "LucideAsteriskSquare",
    "category": "General",
    "keywords": "lucide asterisk square"
  },
  {
    "id": "LucideAtSign",
    "name": "LucideAtSign",
    "category": "General",
    "keywords": "lucide at sign"
  },
  {
    "id": "LucideAtom",
    "name": "LucideAtom",
    "category": "General",
    "keywords": "lucide atom"
  },
  {
    "id": "LucideAudioLines",
    "name": "LucideAudioLines",
    "category": "Media",
    "keywords": "lucide audio lines"
  },
  {
    "id": "LucideAudioWaveform",
    "name": "LucideAudioWaveform",
    "category": "Media",
    "keywords": "lucide audio waveform"
  },
  {
    "id": "LucideAward",
    "name": "LucideAward",
    "category": "General",
    "keywords": "lucide award"
  },
  {
    "id": "LucideAxe",
    "name": "LucideAxe",
    "category": "General",
    "keywords": "lucide axe"
  },
  {
    "id": "LucideAxis3D",
    "name": "LucideAxis3D",
    "category": "General",
    "keywords": "lucide axis3 d"
  },
  {
    "id": "LucideAxis3d",
    "name": "LucideAxis3d",
    "category": "General",
    "keywords": "lucide axis3d"
  },
  {
    "id": "LucideBaby",
    "name": "LucideBaby",
    "category": "General",
    "keywords": "lucide baby"
  },
  {
    "id": "LucideBackpack",
    "name": "LucideBackpack",
    "category": "General",
    "keywords": "lucide backpack"
  },
  {
    "id": "LucideBadge",
    "name": "LucideBadge",
    "category": "General",
    "keywords": "lucide badge"
  },
  {
    "id": "LucideBadgeAlert",
    "name": "LucideBadgeAlert",
    "category": "Symbols",
    "keywords": "lucide badge alert"
  },
  {
    "id": "LucideBadgeCent",
    "name": "LucideBadgeCent",
    "category": "General",
    "keywords": "lucide badge cent"
  },
  {
    "id": "LucideBadgeCheck",
    "name": "LucideBadgeCheck",
    "category": "Symbols",
    "keywords": "lucide badge check"
  },
  {
    "id": "LucideBadgeDollarSign",
    "name": "LucideBadgeDollarSign",
    "category": "General",
    "keywords": "lucide badge dollar sign"
  },
  {
    "id": "LucideBadgeEuro",
    "name": "LucideBadgeEuro",
    "category": "General",
    "keywords": "lucide badge euro"
  },
  {
    "id": "LucideBadgeHelp",
    "name": "LucideBadgeHelp",
    "category": "Symbols",
    "keywords": "lucide badge help"
  },
  {
    "id": "LucideBadgeIndianRupee",
    "name": "LucideBadgeIndianRupee",
    "category": "General",
    "keywords": "lucide badge indian rupee"
  },
  {
    "id": "LucideBadgeInfo",
    "name": "LucideBadgeInfo",
    "category": "Symbols",
    "keywords": "lucide badge info"
  },
  {
    "id": "LucideBadgeJapaneseYen",
    "name": "LucideBadgeJapaneseYen",
    "category": "Symbols",
    "keywords": "lucide badge japanese yen"
  },
  {
    "id": "LucideBadgeMinus",
    "name": "LucideBadgeMinus",
    "category": "Symbols",
    "keywords": "lucide badge minus"
  },
  {
    "id": "LucideBadgePercent",
    "name": "LucideBadgePercent",
    "category": "General",
    "keywords": "lucide badge percent"
  },
  {
    "id": "LucideBadgePlus",
    "name": "LucideBadgePlus",
    "category": "Symbols",
    "keywords": "lucide badge plus"
  },
  {
    "id": "LucideBadgePoundSterling",
    "name": "LucideBadgePoundSterling",
    "category": "General",
    "keywords": "lucide badge pound sterling"
  },
  {
    "id": "LucideBadgeQuestionMark",
    "name": "LucideBadgeQuestionMark",
    "category": "General",
    "keywords": "lucide badge question mark"
  },
  {
    "id": "LucideBadgeRussianRuble",
    "name": "LucideBadgeRussianRuble",
    "category": "General",
    "keywords": "lucide badge russian ruble"
  },
  {
    "id": "LucideBadgeSwissFranc",
    "name": "LucideBadgeSwissFranc",
    "category": "General",
    "keywords": "lucide badge swiss franc"
  },
  {
    "id": "LucideBadgeTurkishLira",
    "name": "LucideBadgeTurkishLira",
    "category": "General",
    "keywords": "lucide badge turkish lira"
  },
  {
    "id": "LucideBadgeX",
    "name": "LucideBadgeX",
    "category": "General",
    "keywords": "lucide badge x"
  },
  {
    "id": "LucideBaggageClaim",
    "name": "LucideBaggageClaim",
    "category": "General",
    "keywords": "lucide baggage claim"
  },
  {
    "id": "LucideBan",
    "name": "LucideBan",
    "category": "General",
    "keywords": "lucide ban"
  },
  {
    "id": "LucideBanana",
    "name": "LucideBanana",
    "category": "General",
    "keywords": "lucide banana"
  },
  {
    "id": "LucideBandage",
    "name": "LucideBandage",
    "category": "General",
    "keywords": "lucide bandage"
  },
  {
    "id": "LucideBanknote",
    "name": "LucideBanknote",
    "category": "General",
    "keywords": "lucide banknote"
  },
  {
    "id": "LucideBanknoteArrowDown",
    "name": "LucideBanknoteArrowDown",
    "category": "Navigation",
    "keywords": "lucide banknote arrow down"
  },
  {
    "id": "LucideBanknoteArrowUp",
    "name": "LucideBanknoteArrowUp",
    "category": "Navigation",
    "keywords": "lucide banknote arrow up"
  },
  {
    "id": "LucideBanknoteX",
    "name": "LucideBanknoteX",
    "category": "General",
    "keywords": "lucide banknote x"
  },
  {
    "id": "LucideBarChart",
    "name": "LucideBarChart",
    "category": "Design",
    "keywords": "lucide bar chart"
  },
  {
    "id": "LucideBarChart2",
    "name": "LucideBarChart2",
    "category": "Design",
    "keywords": "lucide bar chart2"
  },
  {
    "id": "LucideBarChart3",
    "name": "LucideBarChart3",
    "category": "Design",
    "keywords": "lucide bar chart3"
  },
  {
    "id": "LucideBarChart4",
    "name": "LucideBarChart4",
    "category": "Design",
    "keywords": "lucide bar chart4"
  },
  {
    "id": "LucideBarChartBig",
    "name": "LucideBarChartBig",
    "category": "Design",
    "keywords": "lucide bar chart big"
  },
  {
    "id": "LucideBarChartHorizontal",
    "name": "LucideBarChartHorizontal",
    "category": "Design",
    "keywords": "lucide bar chart horizontal"
  },
  {
    "id": "LucideBarChartHorizontalBig",
    "name": "LucideBarChartHorizontalBig",
    "category": "Design",
    "keywords": "lucide bar chart horizontal big"
  },
  {
    "id": "LucideBarcode",
    "name": "LucideBarcode",
    "category": "System",
    "keywords": "lucide barcode"
  },
  {
    "id": "LucideBarrel",
    "name": "LucideBarrel",
    "category": "General",
    "keywords": "lucide barrel"
  },
  {
    "id": "LucideBaseline",
    "name": "LucideBaseline",
    "category": "General",
    "keywords": "lucide baseline"
  },
  {
    "id": "LucideBath",
    "name": "LucideBath",
    "category": "General",
    "keywords": "lucide bath"
  },
  {
    "id": "LucideBattery",
    "name": "LucideBattery",
    "category": "Devices",
    "keywords": "lucide battery"
  },
  {
    "id": "LucideBatteryCharging",
    "name": "LucideBatteryCharging",
    "category": "Devices",
    "keywords": "lucide battery charging"
  },
  {
    "id": "LucideBatteryFull",
    "name": "LucideBatteryFull",
    "category": "Devices",
    "keywords": "lucide battery full"
  },
  {
    "id": "LucideBatteryLow",
    "name": "LucideBatteryLow",
    "category": "Devices",
    "keywords": "lucide battery low"
  },
  {
    "id": "LucideBatteryMedium",
    "name": "LucideBatteryMedium",
    "category": "Devices",
    "keywords": "lucide battery medium"
  },
  {
    "id": "LucideBatteryPlus",
    "name": "LucideBatteryPlus",
    "category": "Devices",
    "keywords": "lucide battery plus"
  },
  {
    "id": "LucideBatteryWarning",
    "name": "LucideBatteryWarning",
    "category": "Devices",
    "keywords": "lucide battery warning"
  },
  {
    "id": "LucideBeaker",
    "name": "LucideBeaker",
    "category": "General",
    "keywords": "lucide beaker"
  },
  {
    "id": "LucideBean",
    "name": "LucideBean",
    "category": "General",
    "keywords": "lucide bean"
  },
  {
    "id": "LucideBeanOff",
    "name": "LucideBeanOff",
    "category": "General",
    "keywords": "lucide bean off"
  },
  {
    "id": "LucideBed",
    "name": "LucideBed",
    "category": "General",
    "keywords": "lucide bed"
  },
  {
    "id": "LucideBedDouble",
    "name": "LucideBedDouble",
    "category": "General",
    "keywords": "lucide bed double"
  },
  {
    "id": "LucideBedSingle",
    "name": "LucideBedSingle",
    "category": "General",
    "keywords": "lucide bed single"
  },
  {
    "id": "LucideBeef",
    "name": "LucideBeef",
    "category": "General",
    "keywords": "lucide beef"
  },
  {
    "id": "LucideBeer",
    "name": "LucideBeer",
    "category": "General",
    "keywords": "lucide beer"
  },
  {
    "id": "LucideBeerOff",
    "name": "LucideBeerOff",
    "category": "General",
    "keywords": "lucide beer off"
  },
  {
    "id": "LucideBell",
    "name": "LucideBell",
    "category": "Symbols",
    "keywords": "lucide bell"
  },
  {
    "id": "LucideBellDot",
    "name": "LucideBellDot",
    "category": "Symbols",
    "keywords": "lucide bell dot"
  },
  {
    "id": "LucideBellElectric",
    "name": "LucideBellElectric",
    "category": "Symbols",
    "keywords": "lucide bell electric"
  },
  {
    "id": "LucideBellMinus",
    "name": "LucideBellMinus",
    "category": "Symbols",
    "keywords": "lucide bell minus"
  },
  {
    "id": "LucideBellOff",
    "name": "LucideBellOff",
    "category": "Symbols",
    "keywords": "lucide bell off"
  },
  {
    "id": "LucideBellPlus",
    "name": "LucideBellPlus",
    "category": "Symbols",
    "keywords": "lucide bell plus"
  },
  {
    "id": "LucideBellRing",
    "name": "LucideBellRing",
    "category": "Symbols",
    "keywords": "lucide bell ring"
  },
  {
    "id": "LucideBetweenHorizonalEnd",
    "name": "LucideBetweenHorizonalEnd",
    "category": "General",
    "keywords": "lucide between horizonal end"
  },
  {
    "id": "LucideBetweenHorizonalStart",
    "name": "LucideBetweenHorizonalStart",
    "category": "Design",
    "keywords": "lucide between horizonal start"
  },
  {
    "id": "LucideBetweenHorizontalEnd",
    "name": "LucideBetweenHorizontalEnd",
    "category": "General",
    "keywords": "lucide between horizontal end"
  },
  {
    "id": "LucideBetweenHorizontalStart",
    "name": "LucideBetweenHorizontalStart",
    "category": "Design",
    "keywords": "lucide between horizontal start"
  },
  {
    "id": "LucideBetweenVerticalEnd",
    "name": "LucideBetweenVerticalEnd",
    "category": "General",
    "keywords": "lucide between vertical end"
  },
  {
    "id": "LucideBetweenVerticalStart",
    "name": "LucideBetweenVerticalStart",
    "category": "Design",
    "keywords": "lucide between vertical start"
  },
  {
    "id": "LucideBicepsFlexed",
    "name": "LucideBicepsFlexed",
    "category": "General",
    "keywords": "lucide biceps flexed"
  },
  {
    "id": "LucideBike",
    "name": "LucideBike",
    "category": "General",
    "keywords": "lucide bike"
  },
  {
    "id": "LucideBinary",
    "name": "LucideBinary",
    "category": "System",
    "keywords": "lucide binary"
  },
  {
    "id": "LucideBinoculars",
    "name": "LucideBinoculars",
    "category": "General",
    "keywords": "lucide binoculars"
  },
  {
    "id": "LucideBiohazard",
    "name": "LucideBiohazard",
    "category": "General",
    "keywords": "lucide biohazard"
  },
  {
    "id": "LucideBird",
    "name": "LucideBird",
    "category": "General",
    "keywords": "lucide bird"
  },
  {
    "id": "LucideBitcoin",
    "name": "LucideBitcoin",
    "category": "General",
    "keywords": "lucide bitcoin"
  },
  {
    "id": "LucideBlend",
    "name": "LucideBlend",
    "category": "Design",
    "keywords": "lucide blend"
  },
  {
    "id": "LucideBlinds",
    "name": "LucideBlinds",
    "category": "General",
    "keywords": "lucide blinds"
  },
  {
    "id": "LucideBlocks",
    "name": "LucideBlocks",
    "category": "System",
    "keywords": "lucide blocks"
  },
  {
    "id": "LucideBluetooth",
    "name": "LucideBluetooth",
    "category": "Devices",
    "keywords": "lucide bluetooth"
  },
  {
    "id": "LucideBluetoothConnected",
    "name": "LucideBluetoothConnected",
    "category": "Devices",
    "keywords": "lucide bluetooth connected"
  },
  {
    "id": "LucideBluetoothOff",
    "name": "LucideBluetoothOff",
    "category": "Devices",
    "keywords": "lucide bluetooth off"
  },
  {
    "id": "LucideBluetoothSearching",
    "name": "LucideBluetoothSearching",
    "category": "Devices",
    "keywords": "lucide bluetooth searching"
  },
  {
    "id": "LucideBold",
    "name": "LucideBold",
    "category": "General",
    "keywords": "lucide bold"
  },
  {
    "id": "LucideBolt",
    "name": "LucideBolt",
    "category": "Symbols",
    "keywords": "lucide bolt"
  },
  {
    "id": "LucideBomb",
    "name": "LucideBomb",
    "category": "General",
    "keywords": "lucide bomb"
  },
  {
    "id": "LucideBone",
    "name": "LucideBone",
    "category": "General",
    "keywords": "lucide bone"
  },
  {
    "id": "LucideBook",
    "name": "LucideBook",
    "category": "General",
    "keywords": "lucide book"
  },
  {
    "id": "LucideBookA",
    "name": "LucideBookA",
    "category": "General",
    "keywords": "lucide book a"
  },
  {
    "id": "LucideBookAlert",
    "name": "LucideBookAlert",
    "category": "Symbols",
    "keywords": "lucide book alert"
  },
  {
    "id": "LucideBookAudio",
    "name": "LucideBookAudio",
    "category": "Media",
    "keywords": "lucide book audio"
  },
  {
    "id": "LucideBookCheck",
    "name": "LucideBookCheck",
    "category": "Symbols",
    "keywords": "lucide book check"
  },
  {
    "id": "LucideBookCopy",
    "name": "LucideBookCopy",
    "category": "Symbols",
    "keywords": "lucide book copy"
  },
  {
    "id": "LucideBookDashed",
    "name": "LucideBookDashed",
    "category": "General",
    "keywords": "lucide book dashed"
  },
  {
    "id": "LucideBookDown",
    "name": "LucideBookDown",
    "category": "General",
    "keywords": "lucide book down"
  },
  {
    "id": "LucideBookHeadphones",
    "name": "LucideBookHeadphones",
    "category": "Media",
    "keywords": "lucide book headphones"
  },
  {
    "id": "LucideBookHeart",
    "name": "LucideBookHeart",
    "category": "Design",
    "keywords": "lucide book heart"
  },
  {
    "id": "LucideBookImage",
    "name": "LucideBookImage",
    "category": "General",
    "keywords": "lucide book image"
  },
  {
    "id": "LucideBookKey",
    "name": "LucideBookKey",
    "category": "System",
    "keywords": "lucide book key"
  },
  {
    "id": "LucideBookLock",
    "name": "LucideBookLock",
    "category": "System",
    "keywords": "lucide book lock"
  },
  {
    "id": "LucideBookMarked",
    "name": "LucideBookMarked",
    "category": "Symbols",
    "keywords": "lucide book marked"
  },
  {
    "id": "LucideBookMinus",
    "name": "LucideBookMinus",
    "category": "Symbols",
    "keywords": "lucide book minus"
  },
  {
    "id": "LucideBookOpen",
    "name": "LucideBookOpen",
    "category": "Design",
    "keywords": "lucide book open"
  },
  {
    "id": "LucideBookOpenCheck",
    "name": "LucideBookOpenCheck",
    "category": "Design",
    "keywords": "lucide book open check"
  },
  {
    "id": "LucideBookOpenText",
    "name": "LucideBookOpenText",
    "category": "Design",
    "keywords": "lucide book open text"
  },
  {
    "id": "LucideBookPlus",
    "name": "LucideBookPlus",
    "category": "Symbols",
    "keywords": "lucide book plus"
  },
  {
    "id": "LucideBookTemplate",
    "name": "LucideBookTemplate",
    "category": "General",
    "keywords": "lucide book template"
  },
  {
    "id": "LucideBookText",
    "name": "LucideBookText",
    "category": "General",
    "keywords": "lucide book text"
  },
  {
    "id": "LucideBookType",
    "name": "LucideBookType",
    "category": "General",
    "keywords": "lucide book type"
  },
  {
    "id": "LucideBookUp",
    "name": "LucideBookUp",
    "category": "General",
    "keywords": "lucide book up"
  },
  {
    "id": "LucideBookUp2",
    "name": "LucideBookUp2",
    "category": "General",
    "keywords": "lucide book up2"
  },
  {
    "id": "LucideBookUser",
    "name": "LucideBookUser",
    "category": "Symbols",
    "keywords": "lucide book user"
  },
  {
    "id": "LucideBookX",
    "name": "LucideBookX",
    "category": "General",
    "keywords": "lucide book x"
  },
  {
    "id": "LucideBookmark",
    "name": "LucideBookmark",
    "category": "Symbols",
    "keywords": "lucide bookmark"
  },
  {
    "id": "LucideBookmarkCheck",
    "name": "LucideBookmarkCheck",
    "category": "Symbols",
    "keywords": "lucide bookmark check"
  },
  {
    "id": "LucideBookmarkMinus",
    "name": "LucideBookmarkMinus",
    "category": "Symbols",
    "keywords": "lucide bookmark minus"
  },
  {
    "id": "LucideBookmarkPlus",
    "name": "LucideBookmarkPlus",
    "category": "Symbols",
    "keywords": "lucide bookmark plus"
  },
  {
    "id": "LucideBookmarkX",
    "name": "LucideBookmarkX",
    "category": "Symbols",
    "keywords": "lucide bookmark x"
  },
  {
    "id": "LucideBoomBox",
    "name": "LucideBoomBox",
    "category": "Media",
    "keywords": "lucide boom box"
  },
  {
    "id": "LucideBot",
    "name": "LucideBot",
    "category": "General",
    "keywords": "lucide bot"
  },
  {
    "id": "LucideBotMessageSquare",
    "name": "LucideBotMessageSquare",
    "category": "General",
    "keywords": "lucide bot message square"
  },
  {
    "id": "LucideBotOff",
    "name": "LucideBotOff",
    "category": "General",
    "keywords": "lucide bot off"
  },
  {
    "id": "LucideBottleWine",
    "name": "LucideBottleWine",
    "category": "General",
    "keywords": "lucide bottle wine"
  },
  {
    "id": "LucideBowArrow",
    "name": "LucideBowArrow",
    "category": "Navigation",
    "keywords": "lucide bow arrow"
  },
  {
    "id": "LucideBox",
    "name": "LucideBox",
    "category": "General",
    "keywords": "lucide box"
  },
  {
    "id": "LucideBoxSelect",
    "name": "LucideBoxSelect",
    "category": "General",
    "keywords": "lucide box select"
  },
  {
    "id": "LucideBoxes",
    "name": "LucideBoxes",
    "category": "General",
    "keywords": "lucide boxes"
  },
  {
    "id": "LucideBraces",
    "name": "LucideBraces",
    "category": "System",
    "keywords": "lucide braces"
  },
  {
    "id": "LucideBrackets",
    "name": "LucideBrackets",
    "category": "System",
    "keywords": "lucide brackets"
  },
  {
    "id": "LucideBrain",
    "name": "LucideBrain",
    "category": "General",
    "keywords": "lucide brain"
  },
  {
    "id": "LucideBrainCircuit",
    "name": "LucideBrainCircuit",
    "category": "General",
    "keywords": "lucide brain circuit"
  },
  {
    "id": "LucideBrainCog",
    "name": "LucideBrainCog",
    "category": "General",
    "keywords": "lucide brain cog"
  },
  {
    "id": "LucideBrickWall",
    "name": "LucideBrickWall",
    "category": "General",
    "keywords": "lucide brick wall"
  },
  {
    "id": "LucideBrickWallFire",
    "name": "LucideBrickWallFire",
    "category": "Symbols",
    "keywords": "lucide brick wall fire"
  },
  {
    "id": "LucideBrickWallShield",
    "name": "LucideBrickWallShield",
    "category": "System",
    "keywords": "lucide brick wall shield"
  },
  {
    "id": "LucideBriefcase",
    "name": "LucideBriefcase",
    "category": "General",
    "keywords": "lucide briefcase"
  },
  {
    "id": "LucideBriefcaseBusiness",
    "name": "LucideBriefcaseBusiness",
    "category": "General",
    "keywords": "lucide briefcase business"
  },
  {
    "id": "LucideBriefcaseConveyorBelt",
    "name": "LucideBriefcaseConveyorBelt",
    "category": "General",
    "keywords": "lucide briefcase conveyor belt"
  },
  {
    "id": "LucideBriefcaseMedical",
    "name": "LucideBriefcaseMedical",
    "category": "General",
    "keywords": "lucide briefcase medical"
  },
  {
    "id": "LucideBringToFront",
    "name": "LucideBringToFront",
    "category": "General",
    "keywords": "lucide bring to front"
  },
  {
    "id": "LucideBrush",
    "name": "LucideBrush",
    "category": "Design",
    "keywords": "lucide brush"
  },
  {
    "id": "LucideBrushCleaning",
    "name": "LucideBrushCleaning",
    "category": "Design",
    "keywords": "lucide brush cleaning"
  },
  {
    "id": "LucideBubbles",
    "name": "LucideBubbles",
    "category": "General",
    "keywords": "lucide bubbles"
  },
  {
    "id": "LucideBug",
    "name": "LucideBug",
    "category": "System",
    "keywords": "lucide bug"
  },
  {
    "id": "LucideBugOff",
    "name": "LucideBugOff",
    "category": "System",
    "keywords": "lucide bug off"
  },
  {
    "id": "LucideBugPlay",
    "name": "LucideBugPlay",
    "category": "Media",
    "keywords": "lucide bug play"
  },
  {
    "id": "LucideBuilding",
    "name": "LucideBuilding",
    "category": "General",
    "keywords": "lucide building"
  },
  {
    "id": "LucideBuilding2",
    "name": "LucideBuilding2",
    "category": "General",
    "keywords": "lucide building2"
  },
  {
    "id": "LucideBus",
    "name": "LucideBus",
    "category": "General",
    "keywords": "lucide bus"
  },
  {
    "id": "LucideBusFront",
    "name": "LucideBusFront",
    "category": "General",
    "keywords": "lucide bus front"
  },
  {
    "id": "LucideCable",
    "name": "LucideCable",
    "category": "Devices",
    "keywords": "lucide cable"
  },
  {
    "id": "LucideCableCar",
    "name": "LucideCableCar",
    "category": "Devices",
    "keywords": "lucide cable car"
  },
  {
    "id": "LucideCake",
    "name": "LucideCake",
    "category": "General",
    "keywords": "lucide cake"
  },
  {
    "id": "LucideCakeSlice",
    "name": "LucideCakeSlice",
    "category": "General",
    "keywords": "lucide cake slice"
  },
  {
    "id": "LucideCalculator",
    "name": "LucideCalculator",
    "category": "General",
    "keywords": "lucide calculator"
  },
  {
    "id": "LucideCalendar",
    "name": "LucideCalendar",
    "category": "General",
    "keywords": "lucide calendar"
  },
  {
    "id": "LucideCalendar1",
    "name": "LucideCalendar1",
    "category": "General",
    "keywords": "lucide calendar1"
  },
  {
    "id": "LucideCalendarArrowDown",
    "name": "LucideCalendarArrowDown",
    "category": "Navigation",
    "keywords": "lucide calendar arrow down"
  },
  {
    "id": "LucideCalendarArrowUp",
    "name": "LucideCalendarArrowUp",
    "category": "Navigation",
    "keywords": "lucide calendar arrow up"
  },
  {
    "id": "LucideCalendarCheck",
    "name": "LucideCalendarCheck",
    "category": "Symbols",
    "keywords": "lucide calendar check"
  },
  {
    "id": "LucideCalendarCheck2",
    "name": "LucideCalendarCheck2",
    "category": "Symbols",
    "keywords": "lucide calendar check2"
  },
  {
    "id": "LucideCalendarClock",
    "name": "LucideCalendarClock",
    "category": "System",
    "keywords": "lucide calendar clock"
  },
  {
    "id": "LucideCalendarCog",
    "name": "LucideCalendarCog",
    "category": "General",
    "keywords": "lucide calendar cog"
  },
  {
    "id": "LucideCalendarDays",
    "name": "LucideCalendarDays",
    "category": "General",
    "keywords": "lucide calendar days"
  },
  {
    "id": "LucideCalendarFold",
    "name": "LucideCalendarFold",
    "category": "General",
    "keywords": "lucide calendar fold"
  },
  {
    "id": "LucideCalendarHeart",
    "name": "LucideCalendarHeart",
    "category": "Design",
    "keywords": "lucide calendar heart"
  },
  {
    "id": "LucideCalendarMinus",
    "name": "LucideCalendarMinus",
    "category": "Symbols",
    "keywords": "lucide calendar minus"
  },
  {
    "id": "LucideCalendarMinus2",
    "name": "LucideCalendarMinus2",
    "category": "Symbols",
    "keywords": "lucide calendar minus2"
  },
  {
    "id": "LucideCalendarOff",
    "name": "LucideCalendarOff",
    "category": "General",
    "keywords": "lucide calendar off"
  },
  {
    "id": "LucideCalendarPlus",
    "name": "LucideCalendarPlus",
    "category": "Symbols",
    "keywords": "lucide calendar plus"
  },
  {
    "id": "LucideCalendarPlus2",
    "name": "LucideCalendarPlus2",
    "category": "Symbols",
    "keywords": "lucide calendar plus2"
  },
  {
    "id": "LucideCalendarRange",
    "name": "LucideCalendarRange",
    "category": "General",
    "keywords": "lucide calendar range"
  },
  {
    "id": "LucideCalendarSearch",
    "name": "LucideCalendarSearch",
    "category": "Symbols",
    "keywords": "lucide calendar search"
  },
  {
    "id": "LucideCalendarSync",
    "name": "LucideCalendarSync",
    "category": "General",
    "keywords": "lucide calendar sync"
  },
  {
    "id": "LucideCalendarX",
    "name": "LucideCalendarX",
    "category": "General",
    "keywords": "lucide calendar x"
  },
  {
    "id": "LucideCalendarX2",
    "name": "LucideCalendarX2",
    "category": "General",
    "keywords": "lucide calendar x2"
  },
  {
    "id": "LucideCamera",
    "name": "LucideCamera",
    "category": "General",
    "keywords": "lucide camera"
  },
  {
    "id": "LucideCameraOff",
    "name": "LucideCameraOff",
    "category": "General",
    "keywords": "lucide camera off"
  },
  {
    "id": "LucideCandlestickChart",
    "name": "LucideCandlestickChart",
    "category": "Design",
    "keywords": "lucide candlestick chart"
  },
  {
    "id": "LucideCandy",
    "name": "LucideCandy",
    "category": "General",
    "keywords": "lucide candy"
  },
  {
    "id": "LucideCandyCane",
    "name": "LucideCandyCane",
    "category": "General",
    "keywords": "lucide candy cane"
  },
  {
    "id": "LucideCandyOff",
    "name": "LucideCandyOff",
    "category": "General",
    "keywords": "lucide candy off"
  },
  {
    "id": "LucideCannabis",
    "name": "LucideCannabis",
    "category": "General",
    "keywords": "lucide cannabis"
  },
  {
    "id": "LucideCaptions",
    "name": "LucideCaptions",
    "category": "General",
    "keywords": "lucide captions"
  },
  {
    "id": "LucideCaptionsOff",
    "name": "LucideCaptionsOff",
    "category": "General",
    "keywords": "lucide captions off"
  },
  {
    "id": "LucideCar",
    "name": "LucideCar",
    "category": "General",
    "keywords": "lucide car"
  },
  {
    "id": "LucideCarFront",
    "name": "LucideCarFront",
    "category": "General",
    "keywords": "lucide car front"
  },
  {
    "id": "LucideCarTaxiFront",
    "name": "LucideCarTaxiFront",
    "category": "Design",
    "keywords": "lucide car taxi front"
  },
  {
    "id": "LucideCaravan",
    "name": "LucideCaravan",
    "category": "General",
    "keywords": "lucide caravan"
  },
  {
    "id": "LucideCardSim",
    "name": "LucideCardSim",
    "category": "General",
    "keywords": "lucide card sim"
  },
  {
    "id": "LucideCarrot",
    "name": "LucideCarrot",
    "category": "General",
    "keywords": "lucide carrot"
  },
  {
    "id": "LucideCaseLower",
    "name": "LucideCaseLower",
    "category": "General",
    "keywords": "lucide case lower"
  },
  {
    "id": "LucideCaseSensitive",
    "name": "LucideCaseSensitive",
    "category": "General",
    "keywords": "lucide case sensitive"
  },
  {
    "id": "LucideCaseUpper",
    "name": "LucideCaseUpper",
    "category": "General",
    "keywords": "lucide case upper"
  },
  {
    "id": "LucideCassetteTape",
    "name": "LucideCassetteTape",
    "category": "Media",
    "keywords": "lucide cassette tape"
  },
  {
    "id": "LucideCast",
    "name": "LucideCast",
    "category": "General",
    "keywords": "lucide cast"
  },
  {
    "id": "LucideCastle",
    "name": "LucideCastle",
    "category": "General",
    "keywords": "lucide castle"
  },
  {
    "id": "LucideCat",
    "name": "LucideCat",
    "category": "General",
    "keywords": "lucide cat"
  },
  {
    "id": "LucideCctv",
    "name": "LucideCctv",
    "category": "Media",
    "keywords": "lucide cctv"
  },
  {
    "id": "LucideChartArea",
    "name": "LucideChartArea",
    "category": "Design",
    "keywords": "lucide chart area"
  },
  {
    "id": "LucideChartBar",
    "name": "LucideChartBar",
    "category": "Design",
    "keywords": "lucide chart bar"
  },
  {
    "id": "LucideChartBarBig",
    "name": "LucideChartBarBig",
    "category": "Design",
    "keywords": "lucide chart bar big"
  },
  {
    "id": "LucideChartBarDecreasing",
    "name": "LucideChartBarDecreasing",
    "category": "Design",
    "keywords": "lucide chart bar decreasing"
  },
  {
    "id": "LucideChartBarIncreasing",
    "name": "LucideChartBarIncreasing",
    "category": "Design",
    "keywords": "lucide chart bar increasing"
  },
  {
    "id": "LucideChartBarStacked",
    "name": "LucideChartBarStacked",
    "category": "Design",
    "keywords": "lucide chart bar stacked"
  },
  {
    "id": "LucideChartCandlestick",
    "name": "LucideChartCandlestick",
    "category": "Design",
    "keywords": "lucide chart candlestick"
  },
  {
    "id": "LucideChartColumn",
    "name": "LucideChartColumn",
    "category": "Design",
    "keywords": "lucide chart column"
  },
  {
    "id": "LucideChartColumnBig",
    "name": "LucideChartColumnBig",
    "category": "Design",
    "keywords": "lucide chart column big"
  },
  {
    "id": "LucideChartColumnDecreasing",
    "name": "LucideChartColumnDecreasing",
    "category": "Design",
    "keywords": "lucide chart column decreasing"
  },
  {
    "id": "LucideChartColumnIncreasing",
    "name": "LucideChartColumnIncreasing",
    "category": "Design",
    "keywords": "lucide chart column increasing"
  },
  {
    "id": "LucideChartColumnStacked",
    "name": "LucideChartColumnStacked",
    "category": "Design",
    "keywords": "lucide chart column stacked"
  },
  {
    "id": "LucideChartGantt",
    "name": "LucideChartGantt",
    "category": "Design",
    "keywords": "lucide chart gantt"
  },
  {
    "id": "LucideChartLine",
    "name": "LucideChartLine",
    "category": "Design",
    "keywords": "lucide chart line"
  },
  {
    "id": "LucideChartNetwork",
    "name": "LucideChartNetwork",
    "category": "Design",
    "keywords": "lucide chart network"
  },
  {
    "id": "LucideChartNoAxesColumn",
    "name": "LucideChartNoAxesColumn",
    "category": "Design",
    "keywords": "lucide chart no axes column"
  },
  {
    "id": "LucideChartNoAxesColumnDecreasing",
    "name": "LucideChartNoAxesColumnDecreasing",
    "category": "Design",
    "keywords": "lucide chart no axes column decreasing"
  },
  {
    "id": "LucideChartNoAxesColumnIncreasing",
    "name": "LucideChartNoAxesColumnIncreasing",
    "category": "Design",
    "keywords": "lucide chart no axes column increasing"
  },
  {
    "id": "LucideChartNoAxesCombined",
    "name": "LucideChartNoAxesCombined",
    "category": "Design",
    "keywords": "lucide chart no axes combined"
  },
  {
    "id": "LucideChartNoAxesGantt",
    "name": "LucideChartNoAxesGantt",
    "category": "Design",
    "keywords": "lucide chart no axes gantt"
  },
  {
    "id": "LucideChartPie",
    "name": "LucideChartPie",
    "category": "Design",
    "keywords": "lucide chart pie"
  },
  {
    "id": "LucideChartScatter",
    "name": "LucideChartScatter",
    "category": "Design",
    "keywords": "lucide chart scatter"
  },
  {
    "id": "LucideChartSpline",
    "name": "LucideChartSpline",
    "category": "Design",
    "keywords": "lucide chart spline"
  },
  {
    "id": "LucideCheck",
    "name": "LucideCheck",
    "category": "Symbols",
    "keywords": "lucide check"
  },
  {
    "id": "LucideCheckCheck",
    "name": "LucideCheckCheck",
    "category": "Symbols",
    "keywords": "lucide check check"
  },
  {
    "id": "LucideCheckCircle",
    "name": "LucideCheckCircle",
    "category": "Symbols",
    "keywords": "lucide check circle"
  },
  {
    "id": "LucideCheckCircle2",
    "name": "LucideCheckCircle2",
    "category": "Symbols",
    "keywords": "lucide check circle2"
  },
  {
    "id": "LucideCheckLine",
    "name": "LucideCheckLine",
    "category": "Symbols",
    "keywords": "lucide check line"
  },
  {
    "id": "LucideCheckSquare",
    "name": "LucideCheckSquare",
    "category": "Symbols",
    "keywords": "lucide check square"
  },
  {
    "id": "LucideCheckSquare2",
    "name": "LucideCheckSquare2",
    "category": "Symbols",
    "keywords": "lucide check square2"
  },
  {
    "id": "LucideChefHat",
    "name": "LucideChefHat",
    "category": "General",
    "keywords": "lucide chef hat"
  },
  {
    "id": "LucideCherry",
    "name": "LucideCherry",
    "category": "General",
    "keywords": "lucide cherry"
  },
  {
    "id": "LucideChevronDown",
    "name": "LucideChevronDown",
    "category": "Navigation",
    "keywords": "lucide chevron down"
  },
  {
    "id": "LucideChevronDownCircle",
    "name": "LucideChevronDownCircle",
    "category": "Navigation",
    "keywords": "lucide chevron down circle"
  },
  {
    "id": "LucideChevronDownSquare",
    "name": "LucideChevronDownSquare",
    "category": "Navigation",
    "keywords": "lucide chevron down square"
  },
  {
    "id": "LucideChevronFirst",
    "name": "LucideChevronFirst",
    "category": "Navigation",
    "keywords": "lucide chevron first"
  },
  {
    "id": "LucideChevronLast",
    "name": "LucideChevronLast",
    "category": "Navigation",
    "keywords": "lucide chevron last"
  },
  {
    "id": "LucideChevronLeft",
    "name": "LucideChevronLeft",
    "category": "Navigation",
    "keywords": "lucide chevron left"
  },
  {
    "id": "LucideChevronLeftCircle",
    "name": "LucideChevronLeftCircle",
    "category": "Navigation",
    "keywords": "lucide chevron left circle"
  },
  {
    "id": "LucideChevronLeftSquare",
    "name": "LucideChevronLeftSquare",
    "category": "Navigation",
    "keywords": "lucide chevron left square"
  },
  {
    "id": "LucideChevronRight",
    "name": "LucideChevronRight",
    "category": "Navigation",
    "keywords": "lucide chevron right"
  },
  {
    "id": "LucideChevronRightCircle",
    "name": "LucideChevronRightCircle",
    "category": "Navigation",
    "keywords": "lucide chevron right circle"
  },
  {
    "id": "LucideChevronRightSquare",
    "name": "LucideChevronRightSquare",
    "category": "Navigation",
    "keywords": "lucide chevron right square"
  },
  {
    "id": "LucideChevronUp",
    "name": "LucideChevronUp",
    "category": "Navigation",
    "keywords": "lucide chevron up"
  },
  {
    "id": "LucideChevronUpCircle",
    "name": "LucideChevronUpCircle",
    "category": "Navigation",
    "keywords": "lucide chevron up circle"
  },
  {
    "id": "LucideChevronUpSquare",
    "name": "LucideChevronUpSquare",
    "category": "Navigation",
    "keywords": "lucide chevron up square"
  },
  {
    "id": "LucideChevronsDown",
    "name": "LucideChevronsDown",
    "category": "Navigation",
    "keywords": "lucide chevrons down"
  },
  {
    "id": "LucideChevronsDownUp",
    "name": "LucideChevronsDownUp",
    "category": "Navigation",
    "keywords": "lucide chevrons down up"
  },
  {
    "id": "LucideChevronsLeft",
    "name": "LucideChevronsLeft",
    "category": "Navigation",
    "keywords": "lucide chevrons left"
  },
  {
    "id": "LucideChevronsLeftRight",
    "name": "LucideChevronsLeftRight",
    "category": "Navigation",
    "keywords": "lucide chevrons left right"
  },
  {
    "id": "LucideChevronsLeftRightEllipsis",
    "name": "LucideChevronsLeftRightEllipsis",
    "category": "Navigation",
    "keywords": "lucide chevrons left right ellipsis"
  },
  {
    "id": "LucideChevronsRight",
    "name": "LucideChevronsRight",
    "category": "Navigation",
    "keywords": "lucide chevrons right"
  },
  {
    "id": "LucideChevronsRightLeft",
    "name": "LucideChevronsRightLeft",
    "category": "Navigation",
    "keywords": "lucide chevrons right left"
  },
  {
    "id": "LucideChevronsUp",
    "name": "LucideChevronsUp",
    "category": "Navigation",
    "keywords": "lucide chevrons up"
  },
  {
    "id": "LucideChevronsUpDown",
    "name": "LucideChevronsUpDown",
    "category": "Navigation",
    "keywords": "lucide chevrons up down"
  },
  {
    "id": "LucideChrome",
    "name": "LucideChrome",
    "category": "General",
    "keywords": "lucide chrome"
  },
  {
    "id": "LucideChromium",
    "name": "LucideChromium",
    "category": "General",
    "keywords": "lucide chromium"
  },
  {
    "id": "LucideChurch",
    "name": "LucideChurch",
    "category": "General",
    "keywords": "lucide church"
  },
  {
    "id": "LucideCigarette",
    "name": "LucideCigarette",
    "category": "General",
    "keywords": "lucide cigarette"
  },
  {
    "id": "LucideCigaretteOff",
    "name": "LucideCigaretteOff",
    "category": "General",
    "keywords": "lucide cigarette off"
  },
  {
    "id": "LucideCircle",
    "name": "LucideCircle",
    "category": "General",
    "keywords": "lucide circle"
  },
  {
    "id": "LucideCircleAlert",
    "name": "LucideCircleAlert",
    "category": "Symbols",
    "keywords": "lucide circle alert"
  },
  {
    "id": "LucideCircleArrowDown",
    "name": "LucideCircleArrowDown",
    "category": "Navigation",
    "keywords": "lucide circle arrow down"
  },
  {
    "id": "LucideCircleArrowLeft",
    "name": "LucideCircleArrowLeft",
    "category": "Navigation",
    "keywords": "lucide circle arrow left"
  },
  {
    "id": "LucideCircleArrowOutDownLeft",
    "name": "LucideCircleArrowOutDownLeft",
    "category": "Navigation",
    "keywords": "lucide circle arrow out down left"
  },
  {
    "id": "LucideCircleArrowOutDownRight",
    "name": "LucideCircleArrowOutDownRight",
    "category": "Navigation",
    "keywords": "lucide circle arrow out down right"
  },
  {
    "id": "LucideCircleArrowOutUpLeft",
    "name": "LucideCircleArrowOutUpLeft",
    "category": "Navigation",
    "keywords": "lucide circle arrow out up left"
  },
  {
    "id": "LucideCircleArrowOutUpRight",
    "name": "LucideCircleArrowOutUpRight",
    "category": "Navigation",
    "keywords": "lucide circle arrow out up right"
  },
  {
    "id": "LucideCircleArrowRight",
    "name": "LucideCircleArrowRight",
    "category": "Navigation",
    "keywords": "lucide circle arrow right"
  },
  {
    "id": "LucideCircleArrowUp",
    "name": "LucideCircleArrowUp",
    "category": "Navigation",
    "keywords": "lucide circle arrow up"
  },
  {
    "id": "LucideCircleCheck",
    "name": "LucideCircleCheck",
    "category": "Symbols",
    "keywords": "lucide circle check"
  },
  {
    "id": "LucideCircleCheckBig",
    "name": "LucideCircleCheckBig",
    "category": "Symbols",
    "keywords": "lucide circle check big"
  },
  {
    "id": "LucideCircleChevronDown",
    "name": "LucideCircleChevronDown",
    "category": "Navigation",
    "keywords": "lucide circle chevron down"
  },
  {
    "id": "LucideCircleChevronLeft",
    "name": "LucideCircleChevronLeft",
    "category": "Navigation",
    "keywords": "lucide circle chevron left"
  },
  {
    "id": "LucideCircleChevronRight",
    "name": "LucideCircleChevronRight",
    "category": "Navigation",
    "keywords": "lucide circle chevron right"
  },
  {
    "id": "LucideCircleChevronUp",
    "name": "LucideCircleChevronUp",
    "category": "Navigation",
    "keywords": "lucide circle chevron up"
  },
  {
    "id": "LucideCircleDashed",
    "name": "LucideCircleDashed",
    "category": "General",
    "keywords": "lucide circle dashed"
  },
  {
    "id": "LucideCircleDivide",
    "name": "LucideCircleDivide",
    "category": "General",
    "keywords": "lucide circle divide"
  },
  {
    "id": "LucideCircleDollarSign",
    "name": "LucideCircleDollarSign",
    "category": "General",
    "keywords": "lucide circle dollar sign"
  },
  {
    "id": "LucideCircleDot",
    "name": "LucideCircleDot",
    "category": "General",
    "keywords": "lucide circle dot"
  },
  {
    "id": "LucideCircleDotDashed",
    "name": "LucideCircleDotDashed",
    "category": "General",
    "keywords": "lucide circle dot dashed"
  },
  {
    "id": "LucideCircleEllipsis",
    "name": "LucideCircleEllipsis",
    "category": "General",
    "keywords": "lucide circle ellipsis"
  },
  {
    "id": "LucideCircleEqual",
    "name": "LucideCircleEqual",
    "category": "General",
    "keywords": "lucide circle equal"
  },
  {
    "id": "LucideCircleFadingArrowUp",
    "name": "LucideCircleFadingArrowUp",
    "category": "Navigation",
    "keywords": "lucide circle fading arrow up"
  },
  {
    "id": "LucideCircleFadingPlus",
    "name": "LucideCircleFadingPlus",
    "category": "Symbols",
    "keywords": "lucide circle fading plus"
  },
  {
    "id": "LucideCircleGauge",
    "name": "LucideCircleGauge",
    "category": "General",
    "keywords": "lucide circle gauge"
  },
  {
    "id": "LucideCircleHelp",
    "name": "LucideCircleHelp",
    "category": "Symbols",
    "keywords": "lucide circle help"
  },
  {
    "id": "LucideCircleMinus",
    "name": "LucideCircleMinus",
    "category": "Symbols",
    "keywords": "lucide circle minus"
  },
  {
    "id": "LucideCircleOff",
    "name": "LucideCircleOff",
    "category": "General",
    "keywords": "lucide circle off"
  },
  {
    "id": "LucideCircleParking",
    "name": "LucideCircleParking",
    "category": "General",
    "keywords": "lucide circle parking"
  },
  {
    "id": "LucideCircleParkingOff",
    "name": "LucideCircleParkingOff",
    "category": "General",
    "keywords": "lucide circle parking off"
  },
  {
    "id": "LucideCirclePause",
    "name": "LucideCirclePause",
    "category": "Media",
    "keywords": "lucide circle pause"
  },
  {
    "id": "LucideCirclePercent",
    "name": "LucideCirclePercent",
    "category": "General",
    "keywords": "lucide circle percent"
  },
  {
    "id": "LucideCirclePlay",
    "name": "LucideCirclePlay",
    "category": "Media",
    "keywords": "lucide circle play"
  },
  {
    "id": "LucideCirclePlus",
    "name": "LucideCirclePlus",
    "category": "Symbols",
    "keywords": "lucide circle plus"
  },
  {
    "id": "LucideCirclePoundSterling",
    "name": "LucideCirclePoundSterling",
    "category": "General",
    "keywords": "lucide circle pound sterling"
  },
  {
    "id": "LucideCirclePower",
    "name": "LucideCirclePower",
    "category": "Devices",
    "keywords": "lucide circle power"
  },
  {
    "id": "LucideCircleQuestionMark",
    "name": "LucideCircleQuestionMark",
    "category": "General",
    "keywords": "lucide circle question mark"
  },
  {
    "id": "LucideCircleSlash",
    "name": "LucideCircleSlash",
    "category": "General",
    "keywords": "lucide circle slash"
  },
  {
    "id": "LucideCircleSlash2",
    "name": "LucideCircleSlash2",
    "category": "General",
    "keywords": "lucide circle slash2"
  },
  {
    "id": "LucideCircleSlashed",
    "name": "LucideCircleSlashed",
    "category": "General",
    "keywords": "lucide circle slashed"
  },
  {
    "id": "LucideCircleSmall",
    "name": "LucideCircleSmall",
    "category": "General",
    "keywords": "lucide circle small"
  },
  {
    "id": "LucideCircleStar",
    "name": "LucideCircleStar",
    "category": "Symbols",
    "keywords": "lucide circle star"
  },
  {
    "id": "LucideCircleStop",
    "name": "LucideCircleStop",
    "category": "General",
    "keywords": "lucide circle stop"
  },
  {
    "id": "LucideCircleUser",
    "name": "LucideCircleUser",
    "category": "Symbols",
    "keywords": "lucide circle user"
  },
  {
    "id": "LucideCircleUserRound",
    "name": "LucideCircleUserRound",
    "category": "Symbols",
    "keywords": "lucide circle user round"
  },
  {
    "id": "LucideCircleX",
    "name": "LucideCircleX",
    "category": "General",
    "keywords": "lucide circle x"
  },
  {
    "id": "LucideCircuitBoard",
    "name": "LucideCircuitBoard",
    "category": "General",
    "keywords": "lucide circuit board"
  },
  {
    "id": "LucideCitrus",
    "name": "LucideCitrus",
    "category": "General",
    "keywords": "lucide citrus"
  },
  {
    "id": "LucideClapperboard",
    "name": "LucideClapperboard",
    "category": "Media",
    "keywords": "lucide clapperboard"
  },
  {
    "id": "LucideClipboard",
    "name": "LucideClipboard",
    "category": "General",
    "keywords": "lucide clipboard"
  },
  {
    "id": "LucideClipboardCheck",
    "name": "LucideClipboardCheck",
    "category": "Symbols",
    "keywords": "lucide clipboard check"
  },
  {
    "id": "LucideClipboardClock",
    "name": "LucideClipboardClock",
    "category": "System",
    "keywords": "lucide clipboard clock"
  },
  {
    "id": "LucideClipboardCopy",
    "name": "LucideClipboardCopy",
    "category": "Symbols",
    "keywords": "lucide clipboard copy"
  },
  {
    "id": "LucideClipboardEdit",
    "name": "LucideClipboardEdit",
    "category": "General",
    "keywords": "lucide clipboard edit"
  },
  {
    "id": "LucideClipboardList",
    "name": "LucideClipboardList",
    "category": "General",
    "keywords": "lucide clipboard list"
  },
  {
    "id": "LucideClipboardMinus",
    "name": "LucideClipboardMinus",
    "category": "Symbols",
    "keywords": "lucide clipboard minus"
  },
  {
    "id": "LucideClipboardPaste",
    "name": "LucideClipboardPaste",
    "category": "General",
    "keywords": "lucide clipboard paste"
  },
  {
    "id": "LucideClipboardPen",
    "name": "LucideClipboardPen",
    "category": "Design",
    "keywords": "lucide clipboard pen"
  },
  {
    "id": "LucideClipboardPenLine",
    "name": "LucideClipboardPenLine",
    "category": "Design",
    "keywords": "lucide clipboard pen line"
  },
  {
    "id": "LucideClipboardPlus",
    "name": "LucideClipboardPlus",
    "category": "Symbols",
    "keywords": "lucide clipboard plus"
  },
  {
    "id": "LucideClipboardSignature",
    "name": "LucideClipboardSignature",
    "category": "General",
    "keywords": "lucide clipboard signature"
  },
  {
    "id": "LucideClipboardType",
    "name": "LucideClipboardType",
    "category": "General",
    "keywords": "lucide clipboard type"
  },
  {
    "id": "LucideClipboardX",
    "name": "LucideClipboardX",
    "category": "General",
    "keywords": "lucide clipboard x"
  },
  {
    "id": "LucideClock",
    "name": "LucideClock",
    "category": "System",
    "keywords": "lucide clock"
  },
  {
    "id": "LucideClock1",
    "name": "LucideClock1",
    "category": "System",
    "keywords": "lucide clock1"
  },
  {
    "id": "LucideClock10",
    "name": "LucideClock10",
    "category": "System",
    "keywords": "lucide clock10"
  },
  {
    "id": "LucideClock11",
    "name": "LucideClock11",
    "category": "System",
    "keywords": "lucide clock11"
  },
  {
    "id": "LucideClock12",
    "name": "LucideClock12",
    "category": "System",
    "keywords": "lucide clock12"
  },
  {
    "id": "LucideClock2",
    "name": "LucideClock2",
    "category": "System",
    "keywords": "lucide clock2"
  },
  {
    "id": "LucideClock3",
    "name": "LucideClock3",
    "category": "System",
    "keywords": "lucide clock3"
  },
  {
    "id": "LucideClock4",
    "name": "LucideClock4",
    "category": "System",
    "keywords": "lucide clock4"
  },
  {
    "id": "LucideClock5",
    "name": "LucideClock5",
    "category": "System",
    "keywords": "lucide clock5"
  },
  {
    "id": "LucideClock6",
    "name": "LucideClock6",
    "category": "System",
    "keywords": "lucide clock6"
  },
  {
    "id": "LucideClock7",
    "name": "LucideClock7",
    "category": "System",
    "keywords": "lucide clock7"
  },
  {
    "id": "LucideClock8",
    "name": "LucideClock8",
    "category": "System",
    "keywords": "lucide clock8"
  },
  {
    "id": "LucideClock9",
    "name": "LucideClock9",
    "category": "System",
    "keywords": "lucide clock9"
  },
  {
    "id": "LucideClockAlert",
    "name": "LucideClockAlert",
    "category": "System",
    "keywords": "lucide clock alert"
  },
  {
    "id": "LucideClockArrowDown",
    "name": "LucideClockArrowDown",
    "category": "Navigation",
    "keywords": "lucide clock arrow down"
  },
  {
    "id": "LucideClockArrowUp",
    "name": "LucideClockArrowUp",
    "category": "Navigation",
    "keywords": "lucide clock arrow up"
  },
  {
    "id": "LucideClockFading",
    "name": "LucideClockFading",
    "category": "System",
    "keywords": "lucide clock fading"
  },
  {
    "id": "LucideClockPlus",
    "name": "LucideClockPlus",
    "category": "System",
    "keywords": "lucide clock plus"
  },
  {
    "id": "LucideClosedCaption",
    "name": "LucideClosedCaption",
    "category": "General",
    "keywords": "lucide closed caption"
  },
  {
    "id": "LucideCloud",
    "name": "LucideCloud",
    "category": "Symbols",
    "keywords": "lucide cloud"
  },
  {
    "id": "LucideCloudAlert",
    "name": "LucideCloudAlert",
    "category": "Symbols",
    "keywords": "lucide cloud alert"
  },
  {
    "id": "LucideCloudCheck",
    "name": "LucideCloudCheck",
    "category": "Symbols",
    "keywords": "lucide cloud check"
  },
  {
    "id": "LucideCloudCog",
    "name": "LucideCloudCog",
    "category": "Symbols",
    "keywords": "lucide cloud cog"
  },
  {
    "id": "LucideCloudDownload",
    "name": "LucideCloudDownload",
    "category": "Symbols",
    "keywords": "lucide cloud download"
  },
  {
    "id": "LucideCloudDrizzle",
    "name": "LucideCloudDrizzle",
    "category": "Symbols",
    "keywords": "lucide cloud drizzle"
  },
  {
    "id": "LucideCloudFog",
    "name": "LucideCloudFog",
    "category": "Symbols",
    "keywords": "lucide cloud fog"
  },
  {
    "id": "LucideCloudHail",
    "name": "LucideCloudHail",
    "category": "Symbols",
    "keywords": "lucide cloud hail"
  },
  {
    "id": "LucideCloudLightning",
    "name": "LucideCloudLightning",
    "category": "Symbols",
    "keywords": "lucide cloud lightning"
  },
  {
    "id": "LucideCloudMoon",
    "name": "LucideCloudMoon",
    "category": "Symbols",
    "keywords": "lucide cloud moon"
  },
  {
    "id": "LucideCloudMoonRain",
    "name": "LucideCloudMoonRain",
    "category": "Symbols",
    "keywords": "lucide cloud moon rain"
  },
  {
    "id": "LucideCloudOff",
    "name": "LucideCloudOff",
    "category": "Symbols",
    "keywords": "lucide cloud off"
  },
  {
    "id": "LucideCloudRain",
    "name": "LucideCloudRain",
    "category": "Symbols",
    "keywords": "lucide cloud rain"
  },
  {
    "id": "LucideCloudRainWind",
    "name": "LucideCloudRainWind",
    "category": "Symbols",
    "keywords": "lucide cloud rain wind"
  },
  {
    "id": "LucideCloudSnow",
    "name": "LucideCloudSnow",
    "category": "Symbols",
    "keywords": "lucide cloud snow"
  },
  {
    "id": "LucideCloudSun",
    "name": "LucideCloudSun",
    "category": "Symbols",
    "keywords": "lucide cloud sun"
  },
  {
    "id": "LucideCloudSunRain",
    "name": "LucideCloudSunRain",
    "category": "Symbols",
    "keywords": "lucide cloud sun rain"
  },
  {
    "id": "LucideCloudUpload",
    "name": "LucideCloudUpload",
    "category": "Symbols",
    "keywords": "lucide cloud upload"
  },
  {
    "id": "LucideCloudy",
    "name": "LucideCloudy",
    "category": "Symbols",
    "keywords": "lucide cloudy"
  },
  {
    "id": "LucideClover",
    "name": "LucideClover",
    "category": "General",
    "keywords": "lucide clover"
  },
  {
    "id": "LucideClub",
    "name": "LucideClub",
    "category": "General",
    "keywords": "lucide club"
  },
  {
    "id": "LucideCode",
    "name": "LucideCode",
    "category": "System",
    "keywords": "lucide code"
  },
  {
    "id": "LucideCode2",
    "name": "LucideCode2",
    "category": "System",
    "keywords": "lucide code2"
  },
  {
    "id": "LucideCodeSquare",
    "name": "LucideCodeSquare",
    "category": "System",
    "keywords": "lucide code square"
  },
  {
    "id": "LucideCodeXml",
    "name": "LucideCodeXml",
    "category": "System",
    "keywords": "lucide code xml"
  },
  {
    "id": "LucideCodepen",
    "name": "LucideCodepen",
    "category": "Design",
    "keywords": "lucide codepen"
  },
  {
    "id": "LucideCodesandbox",
    "name": "LucideCodesandbox",
    "category": "System",
    "keywords": "lucide codesandbox"
  },
  {
    "id": "LucideCoffee",
    "name": "LucideCoffee",
    "category": "General",
    "keywords": "lucide coffee"
  },
  {
    "id": "LucideCog",
    "name": "LucideCog",
    "category": "General",
    "keywords": "lucide cog"
  },
  {
    "id": "LucideCoins",
    "name": "LucideCoins",
    "category": "General",
    "keywords": "lucide coins"
  },
  {
    "id": "LucideColumns",
    "name": "LucideColumns",
    "category": "General",
    "keywords": "lucide columns"
  },
  {
    "id": "LucideColumns2",
    "name": "LucideColumns2",
    "category": "General",
    "keywords": "lucide columns2"
  },
  {
    "id": "LucideColumns3",
    "name": "LucideColumns3",
    "category": "General",
    "keywords": "lucide columns3"
  },
  {
    "id": "LucideColumns3Cog",
    "name": "LucideColumns3Cog",
    "category": "General",
    "keywords": "lucide columns3 cog"
  },
  {
    "id": "LucideColumns4",
    "name": "LucideColumns4",
    "category": "General",
    "keywords": "lucide columns4"
  },
  {
    "id": "LucideColumnsSettings",
    "name": "LucideColumnsSettings",
    "category": "System",
    "keywords": "lucide columns settings"
  },
  {
    "id": "LucideCombine",
    "name": "LucideCombine",
    "category": "General",
    "keywords": "lucide combine"
  },
  {
    "id": "LucideCommand",
    "name": "LucideCommand",
    "category": "System",
    "keywords": "lucide command"
  },
  {
    "id": "LucideCompass",
    "name": "LucideCompass",
    "category": "Navigation",
    "keywords": "lucide compass"
  },
  {
    "id": "LucideComponent",
    "name": "LucideComponent",
    "category": "General",
    "keywords": "lucide component"
  },
  {
    "id": "LucideComputer",
    "name": "LucideComputer",
    "category": "Devices",
    "keywords": "lucide computer"
  },
  {
    "id": "LucideConciergeBell",
    "name": "LucideConciergeBell",
    "category": "Symbols",
    "keywords": "lucide concierge bell"
  },
  {
    "id": "LucideCone",
    "name": "LucideCone",
    "category": "General",
    "keywords": "lucide cone"
  },
  {
    "id": "LucideConstruction",
    "name": "LucideConstruction",
    "category": "General",
    "keywords": "lucide construction"
  },
  {
    "id": "LucideContact",
    "name": "LucideContact",
    "category": "General",
    "keywords": "lucide contact"
  },
  {
    "id": "LucideContact2",
    "name": "LucideContact2",
    "category": "General",
    "keywords": "lucide contact2"
  },
  {
    "id": "LucideContactRound",
    "name": "LucideContactRound",
    "category": "General",
    "keywords": "lucide contact round"
  },
  {
    "id": "LucideContainer",
    "name": "LucideContainer",
    "category": "General",
    "keywords": "lucide container"
  },
  {
    "id": "LucideContrast",
    "name": "LucideContrast",
    "category": "General",
    "keywords": "lucide contrast"
  },
  {
    "id": "LucideCookie",
    "name": "LucideCookie",
    "category": "General",
    "keywords": "lucide cookie"
  },
  {
    "id": "LucideCookingPot",
    "name": "LucideCookingPot",
    "category": "General",
    "keywords": "lucide cooking pot"
  },
  {
    "id": "LucideCopy",
    "name": "LucideCopy",
    "category": "Symbols",
    "keywords": "lucide copy"
  },
  {
    "id": "LucideCopyCheck",
    "name": "LucideCopyCheck",
    "category": "Symbols",
    "keywords": "lucide copy check"
  },
  {
    "id": "LucideCopyMinus",
    "name": "LucideCopyMinus",
    "category": "Symbols",
    "keywords": "lucide copy minus"
  },
  {
    "id": "LucideCopyPlus",
    "name": "LucideCopyPlus",
    "category": "Symbols",
    "keywords": "lucide copy plus"
  },
  {
    "id": "LucideCopySlash",
    "name": "LucideCopySlash",
    "category": "Symbols",
    "keywords": "lucide copy slash"
  },
  {
    "id": "LucideCopyX",
    "name": "LucideCopyX",
    "category": "Symbols",
    "keywords": "lucide copy x"
  },
  {
    "id": "LucideCopyleft",
    "name": "LucideCopyleft",
    "category": "Symbols",
    "keywords": "lucide copyleft"
  },
  {
    "id": "LucideCopyright",
    "name": "LucideCopyright",
    "category": "Symbols",
    "keywords": "lucide copyright"
  },
  {
    "id": "LucideCornerDownLeft",
    "name": "LucideCornerDownLeft",
    "category": "Navigation",
    "keywords": "lucide corner down left"
  },
  {
    "id": "LucideCornerDownRight",
    "name": "LucideCornerDownRight",
    "category": "Navigation",
    "keywords": "lucide corner down right"
  },
  {
    "id": "LucideCornerLeftDown",
    "name": "LucideCornerLeftDown",
    "category": "Navigation",
    "keywords": "lucide corner left down"
  },
  {
    "id": "LucideCornerLeftUp",
    "name": "LucideCornerLeftUp",
    "category": "Navigation",
    "keywords": "lucide corner left up"
  },
  {
    "id": "LucideCornerRightDown",
    "name": "LucideCornerRightDown",
    "category": "Navigation",
    "keywords": "lucide corner right down"
  },
  {
    "id": "LucideCornerRightUp",
    "name": "LucideCornerRightUp",
    "category": "Navigation",
    "keywords": "lucide corner right up"
  },
  {
    "id": "LucideCornerUpLeft",
    "name": "LucideCornerUpLeft",
    "category": "Navigation",
    "keywords": "lucide corner up left"
  },
  {
    "id": "LucideCornerUpRight",
    "name": "LucideCornerUpRight",
    "category": "Navigation",
    "keywords": "lucide corner up right"
  },
  {
    "id": "LucideCpu",
    "name": "LucideCpu",
    "category": "Devices",
    "keywords": "lucide cpu"
  },
  {
    "id": "LucideCreativeCommons",
    "name": "LucideCreativeCommons",
    "category": "General",
    "keywords": "lucide creative commons"
  },
  {
    "id": "LucideCreditCard",
    "name": "LucideCreditCard",
    "category": "General",
    "keywords": "lucide credit card"
  },
  {
    "id": "LucideCroissant",
    "name": "LucideCroissant",
    "category": "General",
    "keywords": "lucide croissant"
  },
  {
    "id": "LucideCrop",
    "name": "LucideCrop",
    "category": "Design",
    "keywords": "lucide crop"
  },
  {
    "id": "LucideCross",
    "name": "LucideCross",
    "category": "Symbols",
    "keywords": "lucide cross"
  },
  {
    "id": "LucideCrosshair",
    "name": "LucideCrosshair",
    "category": "Symbols",
    "keywords": "lucide crosshair"
  },
  {
    "id": "LucideCrown",
    "name": "LucideCrown",
    "category": "General",
    "keywords": "lucide crown"
  },
  {
    "id": "LucideCuboid",
    "name": "LucideCuboid",
    "category": "General",
    "keywords": "lucide cuboid"
  },
  {
    "id": "LucideCupSoda",
    "name": "LucideCupSoda",
    "category": "General",
    "keywords": "lucide cup soda"
  },
  {
    "id": "LucideCurlyBraces",
    "name": "LucideCurlyBraces",
    "category": "System",
    "keywords": "lucide curly braces"
  },
  {
    "id": "LucideCurrency",
    "name": "LucideCurrency",
    "category": "General",
    "keywords": "lucide currency"
  },
  {
    "id": "LucideCylinder",
    "name": "LucideCylinder",
    "category": "General",
    "keywords": "lucide cylinder"
  },
  {
    "id": "LucideDam",
    "name": "LucideDam",
    "category": "General",
    "keywords": "lucide dam"
  },
  {
    "id": "LucideDatabase",
    "name": "LucideDatabase",
    "category": "System",
    "keywords": "lucide database"
  },
  {
    "id": "LucideDatabaseBackup",
    "name": "LucideDatabaseBackup",
    "category": "System",
    "keywords": "lucide database backup"
  },
  {
    "id": "LucideDatabaseZap",
    "name": "LucideDatabaseZap",
    "category": "System",
    "keywords": "lucide database zap"
  },
  {
    "id": "LucideDecimalsArrowLeft",
    "name": "LucideDecimalsArrowLeft",
    "category": "Navigation",
    "keywords": "lucide decimals arrow left"
  },
  {
    "id": "LucideDecimalsArrowRight",
    "name": "LucideDecimalsArrowRight",
    "category": "Navigation",
    "keywords": "lucide decimals arrow right"
  },
  {
    "id": "LucideDelete",
    "name": "LucideDelete",
    "category": "General",
    "keywords": "lucide delete"
  },
  {
    "id": "LucideDessert",
    "name": "LucideDessert",
    "category": "General",
    "keywords": "lucide dessert"
  },
  {
    "id": "LucideDiameter",
    "name": "LucideDiameter",
    "category": "General",
    "keywords": "lucide diameter"
  },
  {
    "id": "LucideDiamond",
    "name": "LucideDiamond",
    "category": "General",
    "keywords": "lucide diamond"
  },
  {
    "id": "LucideDiamondMinus",
    "name": "LucideDiamondMinus",
    "category": "Symbols",
    "keywords": "lucide diamond minus"
  },
  {
    "id": "LucideDiamondPercent",
    "name": "LucideDiamondPercent",
    "category": "General",
    "keywords": "lucide diamond percent"
  },
  {
    "id": "LucideDiamondPlus",
    "name": "LucideDiamondPlus",
    "category": "Symbols",
    "keywords": "lucide diamond plus"
  },
  {
    "id": "LucideDice1",
    "name": "LucideDice1",
    "category": "General",
    "keywords": "lucide dice1"
  },
  {
    "id": "LucideDice2",
    "name": "LucideDice2",
    "category": "General",
    "keywords": "lucide dice2"
  },
  {
    "id": "LucideDice3",
    "name": "LucideDice3",
    "category": "General",
    "keywords": "lucide dice3"
  },
  {
    "id": "LucideDice4",
    "name": "LucideDice4",
    "category": "General",
    "keywords": "lucide dice4"
  },
  {
    "id": "LucideDice5",
    "name": "LucideDice5",
    "category": "General",
    "keywords": "lucide dice5"
  },
  {
    "id": "LucideDice6",
    "name": "LucideDice6",
    "category": "General",
    "keywords": "lucide dice6"
  },
  {
    "id": "LucideDices",
    "name": "LucideDices",
    "category": "General",
    "keywords": "lucide dices"
  },
  {
    "id": "LucideDiff",
    "name": "LucideDiff",
    "category": "General",
    "keywords": "lucide diff"
  },
  {
    "id": "LucideDisc",
    "name": "LucideDisc",
    "category": "Media",
    "keywords": "lucide disc"
  },
  {
    "id": "LucideDisc2",
    "name": "LucideDisc2",
    "category": "Media",
    "keywords": "lucide disc2"
  },
  {
    "id": "LucideDisc3",
    "name": "LucideDisc3",
    "category": "Media",
    "keywords": "lucide disc3"
  },
  {
    "id": "LucideDiscAlbum",
    "name": "LucideDiscAlbum",
    "category": "Media",
    "keywords": "lucide disc album"
  },
  {
    "id": "LucideDivide",
    "name": "LucideDivide",
    "category": "General",
    "keywords": "lucide divide"
  },
  {
    "id": "LucideDivideCircle",
    "name": "LucideDivideCircle",
    "category": "General",
    "keywords": "lucide divide circle"
  },
  {
    "id": "LucideDivideSquare",
    "name": "LucideDivideSquare",
    "category": "General",
    "keywords": "lucide divide square"
  },
  {
    "id": "LucideDna",
    "name": "LucideDna",
    "category": "General",
    "keywords": "lucide dna"
  },
  {
    "id": "LucideDnaOff",
    "name": "LucideDnaOff",
    "category": "General",
    "keywords": "lucide dna off"
  },
  {
    "id": "LucideDock",
    "name": "LucideDock",
    "category": "General",
    "keywords": "lucide dock"
  },
  {
    "id": "LucideDog",
    "name": "LucideDog",
    "category": "General",
    "keywords": "lucide dog"
  },
  {
    "id": "LucideDollarSign",
    "name": "LucideDollarSign",
    "category": "General",
    "keywords": "lucide dollar sign"
  },
  {
    "id": "LucideDonut",
    "name": "LucideDonut",
    "category": "General",
    "keywords": "lucide donut"
  },
  {
    "id": "LucideDoorClosed",
    "name": "LucideDoorClosed",
    "category": "General",
    "keywords": "lucide door closed"
  },
  {
    "id": "LucideDoorClosedLocked",
    "name": "LucideDoorClosedLocked",
    "category": "System",
    "keywords": "lucide door closed locked"
  },
  {
    "id": "LucideDoorOpen",
    "name": "LucideDoorOpen",
    "category": "Design",
    "keywords": "lucide door open"
  },
  {
    "id": "LucideDot",
    "name": "LucideDot",
    "category": "General",
    "keywords": "lucide dot"
  },
  {
    "id": "LucideDotSquare",
    "name": "LucideDotSquare",
    "category": "General",
    "keywords": "lucide dot square"
  },
  {
    "id": "LucideDownload",
    "name": "LucideDownload",
    "category": "General",
    "keywords": "lucide download"
  },
  {
    "id": "LucideDownloadCloud",
    "name": "LucideDownloadCloud",
    "category": "Symbols",
    "keywords": "lucide download cloud"
  },
  {
    "id": "LucideDraftingCompass",
    "name": "LucideDraftingCompass",
    "category": "Navigation",
    "keywords": "lucide drafting compass"
  },
  {
    "id": "LucideDrama",
    "name": "LucideDrama",
    "category": "General",
    "keywords": "lucide drama"
  },
  {
    "id": "LucideDribbble",
    "name": "LucideDribbble",
    "category": "General",
    "keywords": "lucide dribbble"
  },
  {
    "id": "LucideDrill",
    "name": "LucideDrill",
    "category": "General",
    "keywords": "lucide drill"
  },
  {
    "id": "LucideDrone",
    "name": "LucideDrone",
    "category": "General",
    "keywords": "lucide drone"
  },
  {
    "id": "LucideDroplet",
    "name": "LucideDroplet",
    "category": "General",
    "keywords": "lucide droplet"
  },
  {
    "id": "LucideDropletOff",
    "name": "LucideDropletOff",
    "category": "General",
    "keywords": "lucide droplet off"
  },
  {
    "id": "LucideDroplets",
    "name": "LucideDroplets",
    "category": "General",
    "keywords": "lucide droplets"
  },
  {
    "id": "LucideDrum",
    "name": "LucideDrum",
    "category": "General",
    "keywords": "lucide drum"
  },
  {
    "id": "LucideDrumstick",
    "name": "LucideDrumstick",
    "category": "General",
    "keywords": "lucide drumstick"
  },
  {
    "id": "LucideDumbbell",
    "name": "LucideDumbbell",
    "category": "Symbols",
    "keywords": "lucide dumbbell"
  },
  {
    "id": "LucideEar",
    "name": "LucideEar",
    "category": "General",
    "keywords": "lucide ear"
  },
  {
    "id": "LucideEarOff",
    "name": "LucideEarOff",
    "category": "General",
    "keywords": "lucide ear off"
  },
  {
    "id": "LucideEarth",
    "name": "LucideEarth",
    "category": "Design",
    "keywords": "lucide earth"
  },
  {
    "id": "LucideEarthLock",
    "name": "LucideEarthLock",
    "category": "Design",
    "keywords": "lucide earth lock"
  },
  {
    "id": "LucideEclipse",
    "name": "LucideEclipse",
    "category": "General",
    "keywords": "lucide eclipse"
  },
  {
    "id": "LucideEdit",
    "name": "LucideEdit",
    "category": "General",
    "keywords": "lucide edit"
  },
  {
    "id": "LucideEdit2",
    "name": "LucideEdit2",
    "category": "General",
    "keywords": "lucide edit2"
  },
  {
    "id": "LucideEdit3",
    "name": "LucideEdit3",
    "category": "General",
    "keywords": "lucide edit3"
  },
  {
    "id": "LucideEgg",
    "name": "LucideEgg",
    "category": "General",
    "keywords": "lucide egg"
  },
  {
    "id": "LucideEggFried",
    "name": "LucideEggFried",
    "category": "General",
    "keywords": "lucide egg fried"
  },
  {
    "id": "LucideEggOff",
    "name": "LucideEggOff",
    "category": "General",
    "keywords": "lucide egg off"
  },
  {
    "id": "LucideEllipsis",
    "name": "LucideEllipsis",
    "category": "General",
    "keywords": "lucide ellipsis"
  },
  {
    "id": "LucideEllipsisVertical",
    "name": "LucideEllipsisVertical",
    "category": "General",
    "keywords": "lucide ellipsis vertical"
  },
  {
    "id": "LucideEqual",
    "name": "LucideEqual",
    "category": "General",
    "keywords": "lucide equal"
  },
  {
    "id": "LucideEqualApproximately",
    "name": "LucideEqualApproximately",
    "category": "General",
    "keywords": "lucide equal approximately"
  },
  {
    "id": "LucideEqualNot",
    "name": "LucideEqualNot",
    "category": "General",
    "keywords": "lucide equal not"
  },
  {
    "id": "LucideEqualSquare",
    "name": "LucideEqualSquare",
    "category": "General",
    "keywords": "lucide equal square"
  },
  {
    "id": "LucideEraser",
    "name": "LucideEraser",
    "category": "Design",
    "keywords": "lucide eraser"
  },
  {
    "id": "LucideEthernetPort",
    "name": "LucideEthernetPort",
    "category": "General",
    "keywords": "lucide ethernet port"
  },
  {
    "id": "LucideEuro",
    "name": "LucideEuro",
    "category": "General",
    "keywords": "lucide euro"
  },
  {
    "id": "LucideEvCharger",
    "name": "LucideEvCharger",
    "category": "General",
    "keywords": "lucide ev charger"
  },
  {
    "id": "LucideExpand",
    "name": "LucideExpand",
    "category": "General",
    "keywords": "lucide expand"
  },
  {
    "id": "LucideExternalLink",
    "name": "LucideExternalLink",
    "category": "Symbols",
    "keywords": "lucide external link"
  },
  {
    "id": "LucideEye",
    "name": "LucideEye",
    "category": "Symbols",
    "keywords": "lucide eye"
  },
  {
    "id": "LucideEyeClosed",
    "name": "LucideEyeClosed",
    "category": "Symbols",
    "keywords": "lucide eye closed"
  },
  {
    "id": "LucideEyeOff",
    "name": "LucideEyeOff",
    "category": "Symbols",
    "keywords": "lucide eye off"
  },
  {
    "id": "LucideFacebook",
    "name": "LucideFacebook",
    "category": "General",
    "keywords": "lucide facebook"
  },
  {
    "id": "LucideFactory",
    "name": "LucideFactory",
    "category": "General",
    "keywords": "lucide factory"
  },
  {
    "id": "LucideFan",
    "name": "LucideFan",
    "category": "General",
    "keywords": "lucide fan"
  },
  {
    "id": "LucideFastForward",
    "name": "LucideFastForward",
    "category": "General",
    "keywords": "lucide fast forward"
  },
  {
    "id": "LucideFeather",
    "name": "LucideFeather",
    "category": "General",
    "keywords": "lucide feather"
  },
  {
    "id": "LucideFence",
    "name": "LucideFence",
    "category": "General",
    "keywords": "lucide fence"
  },
  {
    "id": "LucideFerrisWheel",
    "name": "LucideFerrisWheel",
    "category": "General",
    "keywords": "lucide ferris wheel"
  },
  {
    "id": "LucideFigma",
    "name": "LucideFigma",
    "category": "General",
    "keywords": "lucide figma"
  },
  {
    "id": "LucideFile",
    "name": "LucideFile",
    "category": "System",
    "keywords": "lucide file"
  },
  {
    "id": "LucideFileArchive",
    "name": "LucideFileArchive",
    "category": "System",
    "keywords": "lucide file archive"
  },
  {
    "id": "LucideFileAudio",
    "name": "LucideFileAudio",
    "category": "Media",
    "keywords": "lucide file audio"
  },
  {
    "id": "LucideFileAudio2",
    "name": "LucideFileAudio2",
    "category": "Media",
    "keywords": "lucide file audio2"
  },
  {
    "id": "LucideFileAxis3D",
    "name": "LucideFileAxis3D",
    "category": "System",
    "keywords": "lucide file axis3 d"
  },
  {
    "id": "LucideFileAxis3d",
    "name": "LucideFileAxis3d",
    "category": "System",
    "keywords": "lucide file axis3d"
  },
  {
    "id": "LucideFileBadge",
    "name": "LucideFileBadge",
    "category": "System",
    "keywords": "lucide file badge"
  },
  {
    "id": "LucideFileBadge2",
    "name": "LucideFileBadge2",
    "category": "System",
    "keywords": "lucide file badge2"
  },
  {
    "id": "LucideFileBarChart",
    "name": "LucideFileBarChart",
    "category": "Design",
    "keywords": "lucide file bar chart"
  },
  {
    "id": "LucideFileBarChart2",
    "name": "LucideFileBarChart2",
    "category": "Design",
    "keywords": "lucide file bar chart2"
  },
  {
    "id": "LucideFileBox",
    "name": "LucideFileBox",
    "category": "System",
    "keywords": "lucide file box"
  },
  {
    "id": "LucideFileChartColumn",
    "name": "LucideFileChartColumn",
    "category": "Design",
    "keywords": "lucide file chart column"
  },
  {
    "id": "LucideFileChartColumnIncreasing",
    "name": "LucideFileChartColumnIncreasing",
    "category": "Design",
    "keywords": "lucide file chart column increasing"
  },
  {
    "id": "LucideFileChartLine",
    "name": "LucideFileChartLine",
    "category": "Design",
    "keywords": "lucide file chart line"
  },
  {
    "id": "LucideFileChartPie",
    "name": "LucideFileChartPie",
    "category": "Design",
    "keywords": "lucide file chart pie"
  },
  {
    "id": "LucideFileCheck",
    "name": "LucideFileCheck",
    "category": "System",
    "keywords": "lucide file check"
  },
  {
    "id": "LucideFileCheck2",
    "name": "LucideFileCheck2",
    "category": "System",
    "keywords": "lucide file check2"
  },
  {
    "id": "LucideFileClock",
    "name": "LucideFileClock",
    "category": "System",
    "keywords": "lucide file clock"
  },
  {
    "id": "LucideFileCode",
    "name": "LucideFileCode",
    "category": "System",
    "keywords": "lucide file code"
  },
  {
    "id": "LucideFileCode2",
    "name": "LucideFileCode2",
    "category": "System",
    "keywords": "lucide file code2"
  },
  {
    "id": "LucideFileCog",
    "name": "LucideFileCog",
    "category": "System",
    "keywords": "lucide file cog"
  },
  {
    "id": "LucideFileCog2",
    "name": "LucideFileCog2",
    "category": "System",
    "keywords": "lucide file cog2"
  },
  {
    "id": "LucideFileDiff",
    "name": "LucideFileDiff",
    "category": "System",
    "keywords": "lucide file diff"
  },
  {
    "id": "LucideFileDigit",
    "name": "LucideFileDigit",
    "category": "System",
    "keywords": "lucide file digit"
  },
  {
    "id": "LucideFileDown",
    "name": "LucideFileDown",
    "category": "System",
    "keywords": "lucide file down"
  },
  {
    "id": "LucideFileEdit",
    "name": "LucideFileEdit",
    "category": "System",
    "keywords": "lucide file edit"
  },
  {
    "id": "LucideFileHeart",
    "name": "LucideFileHeart",
    "category": "Design",
    "keywords": "lucide file heart"
  },
  {
    "id": "LucideFileImage",
    "name": "LucideFileImage",
    "category": "System",
    "keywords": "lucide file image"
  },
  {
    "id": "LucideFileInput",
    "name": "LucideFileInput",
    "category": "System",
    "keywords": "lucide file input"
  },
  {
    "id": "LucideFileJson",
    "name": "LucideFileJson",
    "category": "System",
    "keywords": "lucide file json"
  },
  {
    "id": "LucideFileJson2",
    "name": "LucideFileJson2",
    "category": "System",
    "keywords": "lucide file json2"
  },
  {
    "id": "LucideFileKey",
    "name": "LucideFileKey",
    "category": "System",
    "keywords": "lucide file key"
  },
  {
    "id": "LucideFileKey2",
    "name": "LucideFileKey2",
    "category": "System",
    "keywords": "lucide file key2"
  },
  {
    "id": "LucideFileLineChart",
    "name": "LucideFileLineChart",
    "category": "Design",
    "keywords": "lucide file line chart"
  },
  {
    "id": "LucideFileLock",
    "name": "LucideFileLock",
    "category": "System",
    "keywords": "lucide file lock"
  },
  {
    "id": "LucideFileLock2",
    "name": "LucideFileLock2",
    "category": "System",
    "keywords": "lucide file lock2"
  },
  {
    "id": "LucideFileMinus",
    "name": "LucideFileMinus",
    "category": "System",
    "keywords": "lucide file minus"
  },
  {
    "id": "LucideFileMinus2",
    "name": "LucideFileMinus2",
    "category": "System",
    "keywords": "lucide file minus2"
  },
  {
    "id": "LucideFileMusic",
    "name": "LucideFileMusic",
    "category": "Media",
    "keywords": "lucide file music"
  },
  {
    "id": "LucideFileOutput",
    "name": "LucideFileOutput",
    "category": "System",
    "keywords": "lucide file output"
  },
  {
    "id": "LucideFilePen",
    "name": "LucideFilePen",
    "category": "Design",
    "keywords": "lucide file pen"
  },
  {
    "id": "LucideFilePenLine",
    "name": "LucideFilePenLine",
    "category": "Design",
    "keywords": "lucide file pen line"
  },
  {
    "id": "LucideFilePieChart",
    "name": "LucideFilePieChart",
    "category": "Design",
    "keywords": "lucide file pie chart"
  },
  {
    "id": "LucideFilePlay",
    "name": "LucideFilePlay",
    "category": "Media",
    "keywords": "lucide file play"
  },
  {
    "id": "LucideFilePlus",
    "name": "LucideFilePlus",
    "category": "System",
    "keywords": "lucide file plus"
  },
  {
    "id": "LucideFilePlus2",
    "name": "LucideFilePlus2",
    "category": "System",
    "keywords": "lucide file plus2"
  },
  {
    "id": "LucideFileQuestion",
    "name": "LucideFileQuestion",
    "category": "System",
    "keywords": "lucide file question"
  },
  {
    "id": "LucideFileQuestionMark",
    "name": "LucideFileQuestionMark",
    "category": "System",
    "keywords": "lucide file question mark"
  },
  {
    "id": "LucideFileScan",
    "name": "LucideFileScan",
    "category": "System",
    "keywords": "lucide file scan"
  },
  {
    "id": "LucideFileSearch",
    "name": "LucideFileSearch",
    "category": "System",
    "keywords": "lucide file search"
  },
  {
    "id": "LucideFileSearch2",
    "name": "LucideFileSearch2",
    "category": "System",
    "keywords": "lucide file search2"
  },
  {
    "id": "LucideFileSignature",
    "name": "LucideFileSignature",
    "category": "System",
    "keywords": "lucide file signature"
  },
  {
    "id": "LucideFileSliders",
    "name": "LucideFileSliders",
    "category": "System",
    "keywords": "lucide file sliders"
  },
  {
    "id": "LucideFileSpreadsheet",
    "name": "LucideFileSpreadsheet",
    "category": "System",
    "keywords": "lucide file spreadsheet"
  },
  {
    "id": "LucideFileStack",
    "name": "LucideFileStack",
    "category": "System",
    "keywords": "lucide file stack"
  },
  {
    "id": "LucideFileSymlink",
    "name": "LucideFileSymlink",
    "category": "System",
    "keywords": "lucide file symlink"
  },
  {
    "id": "LucideFileTerminal",
    "name": "LucideFileTerminal",
    "category": "System",
    "keywords": "lucide file terminal"
  },
  {
    "id": "LucideFileText",
    "name": "LucideFileText",
    "category": "System",
    "keywords": "lucide file text"
  },
  {
    "id": "LucideFileType",
    "name": "LucideFileType",
    "category": "System",
    "keywords": "lucide file type"
  },
  {
    "id": "LucideFileType2",
    "name": "LucideFileType2",
    "category": "System",
    "keywords": "lucide file type2"
  },
  {
    "id": "LucideFileUp",
    "name": "LucideFileUp",
    "category": "System",
    "keywords": "lucide file up"
  },
  {
    "id": "LucideFileUser",
    "name": "LucideFileUser",
    "category": "System",
    "keywords": "lucide file user"
  },
  {
    "id": "LucideFileVideo",
    "name": "LucideFileVideo",
    "category": "Media",
    "keywords": "lucide file video"
  },
  {
    "id": "LucideFileVideo2",
    "name": "LucideFileVideo2",
    "category": "Media",
    "keywords": "lucide file video2"
  },
  {
    "id": "LucideFileVideoCamera",
    "name": "LucideFileVideoCamera",
    "category": "Media",
    "keywords": "lucide file video camera"
  },
  {
    "id": "LucideFileVolume",
    "name": "LucideFileVolume",
    "category": "Media",
    "keywords": "lucide file volume"
  },
  {
    "id": "LucideFileVolume2",
    "name": "LucideFileVolume2",
    "category": "Media",
    "keywords": "lucide file volume2"
  },
  {
    "id": "LucideFileWarning",
    "name": "LucideFileWarning",
    "category": "System",
    "keywords": "lucide file warning"
  },
  {
    "id": "LucideFileX",
    "name": "LucideFileX",
    "category": "System",
    "keywords": "lucide file x"
  },
  {
    "id": "LucideFileX2",
    "name": "LucideFileX2",
    "category": "System",
    "keywords": "lucide file x2"
  },
  {
    "id": "LucideFiles",
    "name": "LucideFiles",
    "category": "System",
    "keywords": "lucide files"
  },
  {
    "id": "LucideFilm",
    "name": "LucideFilm",
    "category": "Media",
    "keywords": "lucide film"
  },
  {
    "id": "LucideFilter",
    "name": "LucideFilter",
    "category": "General",
    "keywords": "lucide filter"
  },
  {
    "id": "LucideFilterX",
    "name": "LucideFilterX",
    "category": "General",
    "keywords": "lucide filter x"
  },
  {
    "id": "LucideFingerprint",
    "name": "LucideFingerprint",
    "category": "General",
    "keywords": "lucide fingerprint"
  },
  {
    "id": "LucideFireExtinguisher",
    "name": "LucideFireExtinguisher",
    "category": "Symbols",
    "keywords": "lucide fire extinguisher"
  },
  {
    "id": "LucideFish",
    "name": "LucideFish",
    "category": "General",
    "keywords": "lucide fish"
  },
  {
    "id": "LucideFishOff",
    "name": "LucideFishOff",
    "category": "General",
    "keywords": "lucide fish off"
  },
  {
    "id": "LucideFishSymbol",
    "name": "LucideFishSymbol",
    "category": "General",
    "keywords": "lucide fish symbol"
  },
  {
    "id": "LucideFlag",
    "name": "LucideFlag",
    "category": "Symbols",
    "keywords": "lucide flag"
  },
  {
    "id": "LucideFlagOff",
    "name": "LucideFlagOff",
    "category": "Symbols",
    "keywords": "lucide flag off"
  },
  {
    "id": "LucideFlagTriangleLeft",
    "name": "LucideFlagTriangleLeft",
    "category": "Symbols",
    "keywords": "lucide flag triangle left"
  },
  {
    "id": "LucideFlagTriangleRight",
    "name": "LucideFlagTriangleRight",
    "category": "Symbols",
    "keywords": "lucide flag triangle right"
  },
  {
    "id": "LucideFlame",
    "name": "LucideFlame",
    "category": "Symbols",
    "keywords": "lucide flame"
  },
  {
    "id": "LucideFlameKindling",
    "name": "LucideFlameKindling",
    "category": "Symbols",
    "keywords": "lucide flame kindling"
  },
  {
    "id": "LucideFlashlight",
    "name": "LucideFlashlight",
    "category": "General",
    "keywords": "lucide flashlight"
  },
  {
    "id": "LucideFlashlightOff",
    "name": "LucideFlashlightOff",
    "category": "General",
    "keywords": "lucide flashlight off"
  },
  {
    "id": "LucideFlaskConical",
    "name": "LucideFlaskConical",
    "category": "General",
    "keywords": "lucide flask conical"
  },
  {
    "id": "LucideFlaskConicalOff",
    "name": "LucideFlaskConicalOff",
    "category": "General",
    "keywords": "lucide flask conical off"
  },
  {
    "id": "LucideFlaskRound",
    "name": "LucideFlaskRound",
    "category": "General",
    "keywords": "lucide flask round"
  },
  {
    "id": "LucideFlipHorizontal",
    "name": "LucideFlipHorizontal",
    "category": "General",
    "keywords": "lucide flip horizontal"
  },
  {
    "id": "LucideFlipHorizontal2",
    "name": "LucideFlipHorizontal2",
    "category": "General",
    "keywords": "lucide flip horizontal2"
  },
  {
    "id": "LucideFlipVertical",
    "name": "LucideFlipVertical",
    "category": "General",
    "keywords": "lucide flip vertical"
  },
  {
    "id": "LucideFlipVertical2",
    "name": "LucideFlipVertical2",
    "category": "General",
    "keywords": "lucide flip vertical2"
  },
  {
    "id": "LucideFlower",
    "name": "LucideFlower",
    "category": "General",
    "keywords": "lucide flower"
  },
  {
    "id": "LucideFlower2",
    "name": "LucideFlower2",
    "category": "General",
    "keywords": "lucide flower2"
  },
  {
    "id": "LucideFocus",
    "name": "LucideFocus",
    "category": "General",
    "keywords": "lucide focus"
  },
  {
    "id": "LucideFoldHorizontal",
    "name": "LucideFoldHorizontal",
    "category": "General",
    "keywords": "lucide fold horizontal"
  },
  {
    "id": "LucideFoldVertical",
    "name": "LucideFoldVertical",
    "category": "General",
    "keywords": "lucide fold vertical"
  },
  {
    "id": "LucideFolder",
    "name": "LucideFolder",
    "category": "System",
    "keywords": "lucide folder"
  },
  {
    "id": "LucideFolderArchive",
    "name": "LucideFolderArchive",
    "category": "System",
    "keywords": "lucide folder archive"
  },
  {
    "id": "LucideFolderCheck",
    "name": "LucideFolderCheck",
    "category": "System",
    "keywords": "lucide folder check"
  },
  {
    "id": "LucideFolderClock",
    "name": "LucideFolderClock",
    "category": "System",
    "keywords": "lucide folder clock"
  },
  {
    "id": "LucideFolderClosed",
    "name": "LucideFolderClosed",
    "category": "System",
    "keywords": "lucide folder closed"
  },
  {
    "id": "LucideFolderCode",
    "name": "LucideFolderCode",
    "category": "System",
    "keywords": "lucide folder code"
  },
  {
    "id": "LucideFolderCog",
    "name": "LucideFolderCog",
    "category": "System",
    "keywords": "lucide folder cog"
  },
  {
    "id": "LucideFolderCog2",
    "name": "LucideFolderCog2",
    "category": "System",
    "keywords": "lucide folder cog2"
  },
  {
    "id": "LucideFolderDot",
    "name": "LucideFolderDot",
    "category": "System",
    "keywords": "lucide folder dot"
  },
  {
    "id": "LucideFolderDown",
    "name": "LucideFolderDown",
    "category": "System",
    "keywords": "lucide folder down"
  },
  {
    "id": "LucideFolderEdit",
    "name": "LucideFolderEdit",
    "category": "System",
    "keywords": "lucide folder edit"
  },
  {
    "id": "LucideFolderGit",
    "name": "LucideFolderGit",
    "category": "System",
    "keywords": "lucide folder git"
  },
  {
    "id": "LucideFolderGit2",
    "name": "LucideFolderGit2",
    "category": "System",
    "keywords": "lucide folder git2"
  },
  {
    "id": "LucideFolderHeart",
    "name": "LucideFolderHeart",
    "category": "Design",
    "keywords": "lucide folder heart"
  },
  {
    "id": "LucideFolderInput",
    "name": "LucideFolderInput",
    "category": "System",
    "keywords": "lucide folder input"
  },
  {
    "id": "LucideFolderKanban",
    "name": "LucideFolderKanban",
    "category": "System",
    "keywords": "lucide folder kanban"
  },
  {
    "id": "LucideFolderKey",
    "name": "LucideFolderKey",
    "category": "System",
    "keywords": "lucide folder key"
  },
  {
    "id": "LucideFolderLock",
    "name": "LucideFolderLock",
    "category": "System",
    "keywords": "lucide folder lock"
  },
  {
    "id": "LucideFolderMinus",
    "name": "LucideFolderMinus",
    "category": "System",
    "keywords": "lucide folder minus"
  },
  {
    "id": "LucideFolderOpen",
    "name": "LucideFolderOpen",
    "category": "Design",
    "keywords": "lucide folder open"
  },
  {
    "id": "LucideFolderOpenDot",
    "name": "LucideFolderOpenDot",
    "category": "Design",
    "keywords": "lucide folder open dot"
  },
  {
    "id": "LucideFolderOutput",
    "name": "LucideFolderOutput",
    "category": "System",
    "keywords": "lucide folder output"
  },
  {
    "id": "LucideFolderPen",
    "name": "LucideFolderPen",
    "category": "Design",
    "keywords": "lucide folder pen"
  },
  {
    "id": "LucideFolderPlus",
    "name": "LucideFolderPlus",
    "category": "System",
    "keywords": "lucide folder plus"
  },
  {
    "id": "LucideFolderRoot",
    "name": "LucideFolderRoot",
    "category": "System",
    "keywords": "lucide folder root"
  },
  {
    "id": "LucideFolderSearch",
    "name": "LucideFolderSearch",
    "category": "System",
    "keywords": "lucide folder search"
  },
  {
    "id": "LucideFolderSearch2",
    "name": "LucideFolderSearch2",
    "category": "System",
    "keywords": "lucide folder search2"
  },
  {
    "id": "LucideFolderSymlink",
    "name": "LucideFolderSymlink",
    "category": "System",
    "keywords": "lucide folder symlink"
  },
  {
    "id": "LucideFolderSync",
    "name": "LucideFolderSync",
    "category": "System",
    "keywords": "lucide folder sync"
  },
  {
    "id": "LucideFolderTree",
    "name": "LucideFolderTree",
    "category": "System",
    "keywords": "lucide folder tree"
  },
  {
    "id": "LucideFolderUp",
    "name": "LucideFolderUp",
    "category": "System",
    "keywords": "lucide folder up"
  },
  {
    "id": "LucideFolderX",
    "name": "LucideFolderX",
    "category": "System",
    "keywords": "lucide folder x"
  },
  {
    "id": "LucideFolders",
    "name": "LucideFolders",
    "category": "System",
    "keywords": "lucide folders"
  },
  {
    "id": "LucideFootprints",
    "name": "LucideFootprints",
    "category": "General",
    "keywords": "lucide footprints"
  },
  {
    "id": "LucideForkKnife",
    "name": "LucideForkKnife",
    "category": "General",
    "keywords": "lucide fork knife"
  },
  {
    "id": "LucideForkKnifeCrossed",
    "name": "LucideForkKnifeCrossed",
    "category": "Symbols",
    "keywords": "lucide fork knife crossed"
  },
  {
    "id": "LucideForklift",
    "name": "LucideForklift",
    "category": "General",
    "keywords": "lucide forklift"
  },
  {
    "id": "LucideFormInput",
    "name": "LucideFormInput",
    "category": "General",
    "keywords": "lucide form input"
  },
  {
    "id": "LucideForward",
    "name": "LucideForward",
    "category": "General",
    "keywords": "lucide forward"
  },
  {
    "id": "LucideFrame",
    "name": "LucideFrame",
    "category": "General",
    "keywords": "lucide frame"
  },
  {
    "id": "LucideFramer",
    "name": "LucideFramer",
    "category": "General",
    "keywords": "lucide framer"
  },
  {
    "id": "LucideFrown",
    "name": "LucideFrown",
    "category": "General",
    "keywords": "lucide frown"
  },
  {
    "id": "LucideFuel",
    "name": "LucideFuel",
    "category": "General",
    "keywords": "lucide fuel"
  },
  {
    "id": "LucideFullscreen",
    "name": "LucideFullscreen",
    "category": "Devices",
    "keywords": "lucide fullscreen"
  },
  {
    "id": "LucideFunctionSquare",
    "name": "LucideFunctionSquare",
    "category": "General",
    "keywords": "lucide function square"
  },
  {
    "id": "LucideFunnel",
    "name": "LucideFunnel",
    "category": "General",
    "keywords": "lucide funnel"
  },
  {
    "id": "LucideFunnelPlus",
    "name": "LucideFunnelPlus",
    "category": "Symbols",
    "keywords": "lucide funnel plus"
  },
  {
    "id": "LucideFunnelX",
    "name": "LucideFunnelX",
    "category": "General",
    "keywords": "lucide funnel x"
  },
  {
    "id": "LucideGalleryHorizontal",
    "name": "LucideGalleryHorizontal",
    "category": "General",
    "keywords": "lucide gallery horizontal"
  },
  {
    "id": "LucideGalleryHorizontalEnd",
    "name": "LucideGalleryHorizontalEnd",
    "category": "General",
    "keywords": "lucide gallery horizontal end"
  },
  {
    "id": "LucideGalleryThumbnails",
    "name": "LucideGalleryThumbnails",
    "category": "General",
    "keywords": "lucide gallery thumbnails"
  },
  {
    "id": "LucideGalleryVertical",
    "name": "LucideGalleryVertical",
    "category": "General",
    "keywords": "lucide gallery vertical"
  },
  {
    "id": "LucideGalleryVerticalEnd",
    "name": "LucideGalleryVerticalEnd",
    "category": "General",
    "keywords": "lucide gallery vertical end"
  },
  {
    "id": "LucideGamepad",
    "name": "LucideGamepad",
    "category": "Devices",
    "keywords": "lucide gamepad"
  },
  {
    "id": "LucideGamepad2",
    "name": "LucideGamepad2",
    "category": "Devices",
    "keywords": "lucide gamepad2"
  },
  {
    "id": "LucideGanttChart",
    "name": "LucideGanttChart",
    "category": "Design",
    "keywords": "lucide gantt chart"
  },
  {
    "id": "LucideGanttChartSquare",
    "name": "LucideGanttChartSquare",
    "category": "Design",
    "keywords": "lucide gantt chart square"
  },
  {
    "id": "LucideGauge",
    "name": "LucideGauge",
    "category": "General",
    "keywords": "lucide gauge"
  },
  {
    "id": "LucideGaugeCircle",
    "name": "LucideGaugeCircle",
    "category": "General",
    "keywords": "lucide gauge circle"
  },
  {
    "id": "LucideGavel",
    "name": "LucideGavel",
    "category": "General",
    "keywords": "lucide gavel"
  },
  {
    "id": "LucideGem",
    "name": "LucideGem",
    "category": "General",
    "keywords": "lucide gem"
  },
  {
    "id": "LucideGeorgianLari",
    "name": "LucideGeorgianLari",
    "category": "General",
    "keywords": "lucide georgian lari"
  },
  {
    "id": "LucideGhost",
    "name": "LucideGhost",
    "category": "General",
    "keywords": "lucide ghost"
  },
  {
    "id": "LucideGift",
    "name": "LucideGift",
    "category": "General",
    "keywords": "lucide gift"
  },
  {
    "id": "LucideGitBranch",
    "name": "LucideGitBranch",
    "category": "System",
    "keywords": "lucide git branch"
  },
  {
    "id": "LucideGitBranchPlus",
    "name": "LucideGitBranchPlus",
    "category": "System",
    "keywords": "lucide git branch plus"
  },
  {
    "id": "LucideGitCommit",
    "name": "LucideGitCommit",
    "category": "System",
    "keywords": "lucide git commit"
  },
  {
    "id": "LucideGitCommitHorizontal",
    "name": "LucideGitCommitHorizontal",
    "category": "System",
    "keywords": "lucide git commit horizontal"
  },
  {
    "id": "LucideGitCommitVertical",
    "name": "LucideGitCommitVertical",
    "category": "Media",
    "keywords": "lucide git commit vertical"
  },
  {
    "id": "LucideGitCompare",
    "name": "LucideGitCompare",
    "category": "System",
    "keywords": "lucide git compare"
  },
  {
    "id": "LucideGitCompareArrows",
    "name": "LucideGitCompareArrows",
    "category": "Navigation",
    "keywords": "lucide git compare arrows"
  },
  {
    "id": "LucideGitFork",
    "name": "LucideGitFork",
    "category": "System",
    "keywords": "lucide git fork"
  },
  {
    "id": "LucideGitGraph",
    "name": "LucideGitGraph",
    "category": "System",
    "keywords": "lucide git graph"
  },
  {
    "id": "LucideGitMerge",
    "name": "LucideGitMerge",
    "category": "System",
    "keywords": "lucide git merge"
  },
  {
    "id": "LucideGitPullRequest",
    "name": "LucideGitPullRequest",
    "category": "System",
    "keywords": "lucide git pull request"
  },
  {
    "id": "LucideGitPullRequestArrow",
    "name": "LucideGitPullRequestArrow",
    "category": "Navigation",
    "keywords": "lucide git pull request arrow"
  },
  {
    "id": "LucideGitPullRequestClosed",
    "name": "LucideGitPullRequestClosed",
    "category": "System",
    "keywords": "lucide git pull request closed"
  },
  {
    "id": "LucideGitPullRequestCreate",
    "name": "LucideGitPullRequestCreate",
    "category": "System",
    "keywords": "lucide git pull request create"
  },
  {
    "id": "LucideGitPullRequestCreateArrow",
    "name": "LucideGitPullRequestCreateArrow",
    "category": "Navigation",
    "keywords": "lucide git pull request create arrow"
  },
  {
    "id": "LucideGitPullRequestDraft",
    "name": "LucideGitPullRequestDraft",
    "category": "System",
    "keywords": "lucide git pull request draft"
  },
  {
    "id": "LucideGithub",
    "name": "LucideGithub",
    "category": "System",
    "keywords": "lucide github"
  },
  {
    "id": "LucideGitlab",
    "name": "LucideGitlab",
    "category": "System",
    "keywords": "lucide gitlab"
  },
  {
    "id": "LucideGlassWater",
    "name": "LucideGlassWater",
    "category": "General",
    "keywords": "lucide glass water"
  },
  {
    "id": "LucideGlasses",
    "name": "LucideGlasses",
    "category": "General",
    "keywords": "lucide glasses"
  },
  {
    "id": "LucideGlobe",
    "name": "LucideGlobe",
    "category": "Symbols",
    "keywords": "lucide globe"
  },
  {
    "id": "LucideGlobe2",
    "name": "LucideGlobe2",
    "category": "Symbols",
    "keywords": "lucide globe2"
  },
  {
    "id": "LucideGlobeLock",
    "name": "LucideGlobeLock",
    "category": "System",
    "keywords": "lucide globe lock"
  },
  {
    "id": "LucideGoal",
    "name": "LucideGoal",
    "category": "General",
    "keywords": "lucide goal"
  },
  {
    "id": "LucideGpu",
    "name": "LucideGpu",
    "category": "General",
    "keywords": "lucide gpu"
  },
  {
    "id": "LucideGrab",
    "name": "LucideGrab",
    "category": "General",
    "keywords": "lucide grab"
  },
  {
    "id": "LucideGraduationCap",
    "name": "LucideGraduationCap",
    "category": "General",
    "keywords": "lucide graduation cap"
  },
  {
    "id": "LucideGrape",
    "name": "LucideGrape",
    "category": "General",
    "keywords": "lucide grape"
  },
  {
    "id": "LucideGrid",
    "name": "LucideGrid",
    "category": "General",
    "keywords": "lucide grid"
  },
  {
    "id": "LucideGrid2X2",
    "name": "LucideGrid2X2",
    "category": "General",
    "keywords": "lucide grid2 x2"
  },
  {
    "id": "LucideGrid2X2Check",
    "name": "LucideGrid2X2Check",
    "category": "Symbols",
    "keywords": "lucide grid2 x2 check"
  },
  {
    "id": "LucideGrid2X2Plus",
    "name": "LucideGrid2X2Plus",
    "category": "Symbols",
    "keywords": "lucide grid2 x2 plus"
  },
  {
    "id": "LucideGrid2X2X",
    "name": "LucideGrid2X2X",
    "category": "General",
    "keywords": "lucide grid2 x2 x"
  },
  {
    "id": "LucideGrid2x2",
    "name": "LucideGrid2x2",
    "category": "General",
    "keywords": "lucide grid2x2"
  },
  {
    "id": "LucideGrid2x2Check",
    "name": "LucideGrid2x2Check",
    "category": "Symbols",
    "keywords": "lucide grid2x2 check"
  },
  {
    "id": "LucideGrid2x2Plus",
    "name": "LucideGrid2x2Plus",
    "category": "Symbols",
    "keywords": "lucide grid2x2 plus"
  },
  {
    "id": "LucideGrid2x2X",
    "name": "LucideGrid2x2X",
    "category": "General",
    "keywords": "lucide grid2x2 x"
  },
  {
    "id": "LucideGrid3X3",
    "name": "LucideGrid3X3",
    "category": "General",
    "keywords": "lucide grid3 x3"
  },
  {
    "id": "LucideGrid3x2",
    "name": "LucideGrid3x2",
    "category": "General",
    "keywords": "lucide grid3x2"
  },
  {
    "id": "LucideGrid3x3",
    "name": "LucideGrid3x3",
    "category": "General",
    "keywords": "lucide grid3x3"
  },
  {
    "id": "LucideGrip",
    "name": "LucideGrip",
    "category": "General",
    "keywords": "lucide grip"
  },
  {
    "id": "LucideGripHorizontal",
    "name": "LucideGripHorizontal",
    "category": "General",
    "keywords": "lucide grip horizontal"
  },
  {
    "id": "LucideGripVertical",
    "name": "LucideGripVertical",
    "category": "General",
    "keywords": "lucide grip vertical"
  },
  {
    "id": "LucideGroup",
    "name": "LucideGroup",
    "category": "General",
    "keywords": "lucide group"
  },
  {
    "id": "LucideGuitar",
    "name": "LucideGuitar",
    "category": "General",
    "keywords": "lucide guitar"
  },
  {
    "id": "LucideHam",
    "name": "LucideHam",
    "category": "General",
    "keywords": "lucide ham"
  },
  {
    "id": "LucideHamburger",
    "name": "LucideHamburger",
    "category": "General",
    "keywords": "lucide hamburger"
  },
  {
    "id": "LucideHammer",
    "name": "LucideHammer",
    "category": "System",
    "keywords": "lucide hammer"
  },
  {
    "id": "LucideHand",
    "name": "LucideHand",
    "category": "General",
    "keywords": "lucide hand"
  },
  {
    "id": "LucideHandCoins",
    "name": "LucideHandCoins",
    "category": "General",
    "keywords": "lucide hand coins"
  },
  {
    "id": "LucideHandFist",
    "name": "LucideHandFist",
    "category": "General",
    "keywords": "lucide hand fist"
  },
  {
    "id": "LucideHandGrab",
    "name": "LucideHandGrab",
    "category": "General",
    "keywords": "lucide hand grab"
  },
  {
    "id": "LucideHandHeart",
    "name": "LucideHandHeart",
    "category": "Design",
    "keywords": "lucide hand heart"
  },
  {
    "id": "LucideHandHelping",
    "name": "LucideHandHelping",
    "category": "Symbols",
    "keywords": "lucide hand helping"
  },
  {
    "id": "LucideHandMetal",
    "name": "LucideHandMetal",
    "category": "General",
    "keywords": "lucide hand metal"
  },
  {
    "id": "LucideHandPlatter",
    "name": "LucideHandPlatter",
    "category": "General",
    "keywords": "lucide hand platter"
  },
  {
    "id": "LucideHandbag",
    "name": "LucideHandbag",
    "category": "General",
    "keywords": "lucide handbag"
  },
  {
    "id": "LucideHandshake",
    "name": "LucideHandshake",
    "category": "General",
    "keywords": "lucide handshake"
  },
  {
    "id": "LucideHardDrive",
    "name": "LucideHardDrive",
    "category": "Devices",
    "keywords": "lucide hard drive"
  },
  {
    "id": "LucideHardDriveDownload",
    "name": "LucideHardDriveDownload",
    "category": "Devices",
    "keywords": "lucide hard drive download"
  },
  {
    "id": "LucideHardDriveUpload",
    "name": "LucideHardDriveUpload",
    "category": "Devices",
    "keywords": "lucide hard drive upload"
  },
  {
    "id": "LucideHardHat",
    "name": "LucideHardHat",
    "category": "General",
    "keywords": "lucide hard hat"
  },
  {
    "id": "LucideHash",
    "name": "LucideHash",
    "category": "General",
    "keywords": "lucide hash"
  },
  {
    "id": "LucideHatGlasses",
    "name": "LucideHatGlasses",
    "category": "General",
    "keywords": "lucide hat glasses"
  },
  {
    "id": "LucideHaze",
    "name": "LucideHaze",
    "category": "General",
    "keywords": "lucide haze"
  },
  {
    "id": "LucideHdmiPort",
    "name": "LucideHdmiPort",
    "category": "General",
    "keywords": "lucide hdmi port"
  },
  {
    "id": "LucideHeading",
    "name": "LucideHeading",
    "category": "General",
    "keywords": "lucide heading"
  },
  {
    "id": "LucideHeading1",
    "name": "LucideHeading1",
    "category": "General",
    "keywords": "lucide heading1"
  },
  {
    "id": "LucideHeading2",
    "name": "LucideHeading2",
    "category": "General",
    "keywords": "lucide heading2"
  },
  {
    "id": "LucideHeading3",
    "name": "LucideHeading3",
    "category": "General",
    "keywords": "lucide heading3"
  },
  {
    "id": "LucideHeading4",
    "name": "LucideHeading4",
    "category": "General",
    "keywords": "lucide heading4"
  },
  {
    "id": "LucideHeading5",
    "name": "LucideHeading5",
    "category": "General",
    "keywords": "lucide heading5"
  },
  {
    "id": "LucideHeading6",
    "name": "LucideHeading6",
    "category": "General",
    "keywords": "lucide heading6"
  },
  {
    "id": "LucideHeadphoneOff",
    "name": "LucideHeadphoneOff",
    "category": "Media",
    "keywords": "lucide headphone off"
  },
  {
    "id": "LucideHeadphones",
    "name": "LucideHeadphones",
    "category": "Media",
    "keywords": "lucide headphones"
  },
  {
    "id": "LucideHeadset",
    "name": "LucideHeadset",
    "category": "General",
    "keywords": "lucide headset"
  },
  {
    "id": "LucideHeart",
    "name": "LucideHeart",
    "category": "Design",
    "keywords": "lucide heart"
  },
  {
    "id": "LucideHeartCrack",
    "name": "LucideHeartCrack",
    "category": "Design",
    "keywords": "lucide heart crack"
  },
  {
    "id": "LucideHeartHandshake",
    "name": "LucideHeartHandshake",
    "category": "Design",
    "keywords": "lucide heart handshake"
  },
  {
    "id": "LucideHeartMinus",
    "name": "LucideHeartMinus",
    "category": "Design",
    "keywords": "lucide heart minus"
  },
  {
    "id": "LucideHeartOff",
    "name": "LucideHeartOff",
    "category": "Design",
    "keywords": "lucide heart off"
  },
  {
    "id": "LucideHeartPlus",
    "name": "LucideHeartPlus",
    "category": "Design",
    "keywords": "lucide heart plus"
  },
  {
    "id": "LucideHeartPulse",
    "name": "LucideHeartPulse",
    "category": "Design",
    "keywords": "lucide heart pulse"
  },
  {
    "id": "LucideHeater",
    "name": "LucideHeater",
    "category": "General",
    "keywords": "lucide heater"
  },
  {
    "id": "LucideHelpCircle",
    "name": "LucideHelpCircle",
    "category": "Symbols",
    "keywords": "lucide help circle"
  },
  {
    "id": "LucideHelpingHand",
    "name": "LucideHelpingHand",
    "category": "Symbols",
    "keywords": "lucide helping hand"
  },
  {
    "id": "LucideHexagon",
    "name": "LucideHexagon",
    "category": "General",
    "keywords": "lucide hexagon"
  },
  {
    "id": "LucideHighlighter",
    "name": "LucideHighlighter",
    "category": "General",
    "keywords": "lucide highlighter"
  },
  {
    "id": "LucideHistory",
    "name": "LucideHistory",
    "category": "General",
    "keywords": "lucide history"
  },
  {
    "id": "LucideHome",
    "name": "LucideHome",
    "category": "General",
    "keywords": "lucide home"
  },
  {
    "id": "LucideHop",
    "name": "LucideHop",
    "category": "General",
    "keywords": "lucide hop"
  },
  {
    "id": "LucideHopOff",
    "name": "LucideHopOff",
    "category": "General",
    "keywords": "lucide hop off"
  },
  {
    "id": "LucideHospital",
    "name": "LucideHospital",
    "category": "General",
    "keywords": "lucide hospital"
  },
  {
    "id": "LucideHotel",
    "name": "LucideHotel",
    "category": "General",
    "keywords": "lucide hotel"
  },
  {
    "id": "LucideHourglass",
    "name": "LucideHourglass",
    "category": "General",
    "keywords": "lucide hourglass"
  },
  {
    "id": "LucideHouse",
    "name": "LucideHouse",
    "category": "General",
    "keywords": "lucide house"
  },
  {
    "id": "LucideHouseHeart",
    "name": "LucideHouseHeart",
    "category": "Design",
    "keywords": "lucide house heart"
  },
  {
    "id": "LucideHousePlug",
    "name": "LucideHousePlug",
    "category": "General",
    "keywords": "lucide house plug"
  },
  {
    "id": "LucideHousePlus",
    "name": "LucideHousePlus",
    "category": "Symbols",
    "keywords": "lucide house plus"
  },
  {
    "id": "LucideHouseWifi",
    "name": "LucideHouseWifi",
    "category": "Devices",
    "keywords": "lucide house wifi"
  },
  {
    "id": "LucideIceCream",
    "name": "LucideIceCream",
    "category": "General",
    "keywords": "lucide ice cream"
  },
  {
    "id": "LucideIceCream2",
    "name": "LucideIceCream2",
    "category": "General",
    "keywords": "lucide ice cream2"
  },
  {
    "id": "LucideIceCreamBowl",
    "name": "LucideIceCreamBowl",
    "category": "General",
    "keywords": "lucide ice cream bowl"
  },
  {
    "id": "LucideIceCreamCone",
    "name": "LucideIceCreamCone",
    "category": "General",
    "keywords": "lucide ice cream cone"
  },
  {
    "id": "LucideIdCard",
    "name": "LucideIdCard",
    "category": "General",
    "keywords": "lucide id card"
  },
  {
    "id": "LucideIdCardLanyard",
    "name": "LucideIdCardLanyard",
    "category": "General",
    "keywords": "lucide id card lanyard"
  },
  {
    "id": "LucideImage",
    "name": "LucideImage",
    "category": "General",
    "keywords": "lucide image"
  },
  {
    "id": "LucideImageDown",
    "name": "LucideImageDown",
    "category": "General",
    "keywords": "lucide image down"
  },
  {
    "id": "LucideImageMinus",
    "name": "LucideImageMinus",
    "category": "Symbols",
    "keywords": "lucide image minus"
  },
  {
    "id": "LucideImageOff",
    "name": "LucideImageOff",
    "category": "General",
    "keywords": "lucide image off"
  },
  {
    "id": "LucideImagePlay",
    "name": "LucideImagePlay",
    "category": "Media",
    "keywords": "lucide image play"
  },
  {
    "id": "LucideImagePlus",
    "name": "LucideImagePlus",
    "category": "Symbols",
    "keywords": "lucide image plus"
  },
  {
    "id": "LucideImageUp",
    "name": "LucideImageUp",
    "category": "General",
    "keywords": "lucide image up"
  },
  {
    "id": "LucideImageUpscale",
    "name": "LucideImageUpscale",
    "category": "General",
    "keywords": "lucide image upscale"
  },
  {
    "id": "LucideImages",
    "name": "LucideImages",
    "category": "General",
    "keywords": "lucide images"
  },
  {
    "id": "LucideImport",
    "name": "LucideImport",
    "category": "General",
    "keywords": "lucide import"
  },
  {
    "id": "LucideInbox",
    "name": "LucideInbox",
    "category": "General",
    "keywords": "lucide inbox"
  },
  {
    "id": "LucideIndent",
    "name": "LucideIndent",
    "category": "General",
    "keywords": "lucide indent"
  },
  {
    "id": "LucideIndentDecrease",
    "name": "LucideIndentDecrease",
    "category": "General",
    "keywords": "lucide indent decrease"
  },
  {
    "id": "LucideIndentIncrease",
    "name": "LucideIndentIncrease",
    "category": "General",
    "keywords": "lucide indent increase"
  },
  {
    "id": "LucideIndianRupee",
    "name": "LucideIndianRupee",
    "category": "General",
    "keywords": "lucide indian rupee"
  },
  {
    "id": "LucideInfinity",
    "name": "LucideInfinity",
    "category": "General",
    "keywords": "lucide infinity"
  },
  {
    "id": "LucideInfo",
    "name": "LucideInfo",
    "category": "Symbols",
    "keywords": "lucide info"
  },
  {
    "id": "LucideInspect",
    "name": "LucideInspect",
    "category": "General",
    "keywords": "lucide inspect"
  },
  {
    "id": "LucideInspectionPanel",
    "name": "LucideInspectionPanel",
    "category": "General",
    "keywords": "lucide inspection panel"
  },
  {
    "id": "LucideInstagram",
    "name": "LucideInstagram",
    "category": "Symbols",
    "keywords": "lucide instagram"
  },
  {
    "id": "LucideItalic",
    "name": "LucideItalic",
    "category": "General",
    "keywords": "lucide italic"
  },
  {
    "id": "LucideIterationCcw",
    "name": "LucideIterationCcw",
    "category": "General",
    "keywords": "lucide iteration ccw"
  },
  {
    "id": "LucideIterationCw",
    "name": "LucideIterationCw",
    "category": "General",
    "keywords": "lucide iteration cw"
  },
  {
    "id": "LucideJapaneseYen",
    "name": "LucideJapaneseYen",
    "category": "Symbols",
    "keywords": "lucide japanese yen"
  },
  {
    "id": "LucideJoystick",
    "name": "LucideJoystick",
    "category": "Devices",
    "keywords": "lucide joystick"
  },
  {
    "id": "LucideKanban",
    "name": "LucideKanban",
    "category": "General",
    "keywords": "lucide kanban"
  },
  {
    "id": "LucideKanbanSquare",
    "name": "LucideKanbanSquare",
    "category": "General",
    "keywords": "lucide kanban square"
  },
  {
    "id": "LucideKanbanSquareDashed",
    "name": "LucideKanbanSquareDashed",
    "category": "General",
    "keywords": "lucide kanban square dashed"
  },
  {
    "id": "LucideKayak",
    "name": "LucideKayak",
    "category": "General",
    "keywords": "lucide kayak"
  },
  {
    "id": "LucideKey",
    "name": "LucideKey",
    "category": "System",
    "keywords": "lucide key"
  },
  {
    "id": "LucideKeyRound",
    "name": "LucideKeyRound",
    "category": "System",
    "keywords": "lucide key round"
  },
  {
    "id": "LucideKeySquare",
    "name": "LucideKeySquare",
    "category": "System",
    "keywords": "lucide key square"
  },
  {
    "id": "LucideKeyboard",
    "name": "LucideKeyboard",
    "category": "Devices",
    "keywords": "lucide keyboard"
  },
  {
    "id": "LucideKeyboardMusic",
    "name": "LucideKeyboardMusic",
    "category": "Media",
    "keywords": "lucide keyboard music"
  },
  {
    "id": "LucideKeyboardOff",
    "name": "LucideKeyboardOff",
    "category": "Devices",
    "keywords": "lucide keyboard off"
  },
  {
    "id": "LucideLamp",
    "name": "LucideLamp",
    "category": "General",
    "keywords": "lucide lamp"
  },
  {
    "id": "LucideLampCeiling",
    "name": "LucideLampCeiling",
    "category": "General",
    "keywords": "lucide lamp ceiling"
  },
  {
    "id": "LucideLampDesk",
    "name": "LucideLampDesk",
    "category": "General",
    "keywords": "lucide lamp desk"
  },
  {
    "id": "LucideLampFloor",
    "name": "LucideLampFloor",
    "category": "General",
    "keywords": "lucide lamp floor"
  },
  {
    "id": "LucideLampWallDown",
    "name": "LucideLampWallDown",
    "category": "General",
    "keywords": "lucide lamp wall down"
  },
  {
    "id": "LucideLampWallUp",
    "name": "LucideLampWallUp",
    "category": "General",
    "keywords": "lucide lamp wall up"
  },
  {
    "id": "LucideLandPlot",
    "name": "LucideLandPlot",
    "category": "General",
    "keywords": "lucide land plot"
  },
  {
    "id": "LucideLandmark",
    "name": "LucideLandmark",
    "category": "General",
    "keywords": "lucide landmark"
  },
  {
    "id": "LucideLanguages",
    "name": "LucideLanguages",
    "category": "General",
    "keywords": "lucide languages"
  },
  {
    "id": "LucideLaptop",
    "name": "LucideLaptop",
    "category": "Devices",
    "keywords": "lucide laptop"
  },
  {
    "id": "LucideLaptop2",
    "name": "LucideLaptop2",
    "category": "Devices",
    "keywords": "lucide laptop2"
  },
  {
    "id": "LucideLaptopMinimal",
    "name": "LucideLaptopMinimal",
    "category": "Devices",
    "keywords": "lucide laptop minimal"
  },
  {
    "id": "LucideLaptopMinimalCheck",
    "name": "LucideLaptopMinimalCheck",
    "category": "Devices",
    "keywords": "lucide laptop minimal check"
  },
  {
    "id": "LucideLasso",
    "name": "LucideLasso",
    "category": "Design",
    "keywords": "lucide lasso"
  },
  {
    "id": "LucideLassoSelect",
    "name": "LucideLassoSelect",
    "category": "Design",
    "keywords": "lucide lasso select"
  },
  {
    "id": "LucideLaugh",
    "name": "LucideLaugh",
    "category": "General",
    "keywords": "lucide laugh"
  },
  {
    "id": "LucideLayers",
    "name": "LucideLayers",
    "category": "Design",
    "keywords": "lucide layers"
  },
  {
    "id": "LucideLayers2",
    "name": "LucideLayers2",
    "category": "Design",
    "keywords": "lucide layers2"
  },
  {
    "id": "LucideLayers3",
    "name": "LucideLayers3",
    "category": "Design",
    "keywords": "lucide layers3"
  },
  {
    "id": "LucideLayout",
    "name": "LucideLayout",
    "category": "General",
    "keywords": "lucide layout"
  },
  {
    "id": "LucideLayoutDashboard",
    "name": "LucideLayoutDashboard",
    "category": "General",
    "keywords": "lucide layout dashboard"
  },
  {
    "id": "LucideLayoutGrid",
    "name": "LucideLayoutGrid",
    "category": "General",
    "keywords": "lucide layout grid"
  },
  {
    "id": "LucideLayoutList",
    "name": "LucideLayoutList",
    "category": "General",
    "keywords": "lucide layout list"
  },
  {
    "id": "LucideLayoutPanelLeft",
    "name": "LucideLayoutPanelLeft",
    "category": "General",
    "keywords": "lucide layout panel left"
  },
  {
    "id": "LucideLayoutPanelTop",
    "name": "LucideLayoutPanelTop",
    "category": "General",
    "keywords": "lucide layout panel top"
  },
  {
    "id": "LucideLayoutTemplate",
    "name": "LucideLayoutTemplate",
    "category": "General",
    "keywords": "lucide layout template"
  },
  {
    "id": "LucideLeaf",
    "name": "LucideLeaf",
    "category": "General",
    "keywords": "lucide leaf"
  },
  {
    "id": "LucideLeafyGreen",
    "name": "LucideLeafyGreen",
    "category": "General",
    "keywords": "lucide leafy green"
  },
  {
    "id": "LucideLectern",
    "name": "LucideLectern",
    "category": "General",
    "keywords": "lucide lectern"
  },
  {
    "id": "LucideLetterText",
    "name": "LucideLetterText",
    "category": "General",
    "keywords": "lucide letter text"
  },
  {
    "id": "LucideLibrary",
    "name": "LucideLibrary",
    "category": "General",
    "keywords": "lucide library"
  },
  {
    "id": "LucideLibraryBig",
    "name": "LucideLibraryBig",
    "category": "General",
    "keywords": "lucide library big"
  },
  {
    "id": "LucideLibrarySquare",
    "name": "LucideLibrarySquare",
    "category": "General",
    "keywords": "lucide library square"
  },
  {
    "id": "LucideLifeBuoy",
    "name": "LucideLifeBuoy",
    "category": "General",
    "keywords": "lucide life buoy"
  },
  {
    "id": "LucideLigature",
    "name": "LucideLigature",
    "category": "General",
    "keywords": "lucide ligature"
  },
  {
    "id": "LucideLightbulb",
    "name": "LucideLightbulb",
    "category": "General",
    "keywords": "lucide lightbulb"
  },
  {
    "id": "LucideLightbulbOff",
    "name": "LucideLightbulbOff",
    "category": "General",
    "keywords": "lucide lightbulb off"
  },
  {
    "id": "LucideLineChart",
    "name": "LucideLineChart",
    "category": "Design",
    "keywords": "lucide line chart"
  },
  {
    "id": "LucideLineSquiggle",
    "name": "LucideLineSquiggle",
    "category": "General",
    "keywords": "lucide line squiggle"
  },
  {
    "id": "LucideLink",
    "name": "LucideLink",
    "category": "Symbols",
    "keywords": "lucide link"
  },
  {
    "id": "LucideLink2",
    "name": "LucideLink2",
    "category": "Symbols",
    "keywords": "lucide link2"
  },
  {
    "id": "LucideLink2Off",
    "name": "LucideLink2Off",
    "category": "Symbols",
    "keywords": "lucide link2 off"
  },
  {
    "id": "LucideLinkedin",
    "name": "LucideLinkedin",
    "category": "Symbols",
    "keywords": "lucide linkedin"
  },
  {
    "id": "LucideList",
    "name": "LucideList",
    "category": "General",
    "keywords": "lucide list"
  },
  {
    "id": "LucideListCheck",
    "name": "LucideListCheck",
    "category": "Symbols",
    "keywords": "lucide list check"
  },
  {
    "id": "LucideListChecks",
    "name": "LucideListChecks",
    "category": "Symbols",
    "keywords": "lucide list checks"
  },
  {
    "id": "LucideListChevronsDownUp",
    "name": "LucideListChevronsDownUp",
    "category": "Navigation",
    "keywords": "lucide list chevrons down up"
  },
  {
    "id": "LucideListChevronsUpDown",
    "name": "LucideListChevronsUpDown",
    "category": "Navigation",
    "keywords": "lucide list chevrons up down"
  },
  {
    "id": "LucideListCollapse",
    "name": "LucideListCollapse",
    "category": "General",
    "keywords": "lucide list collapse"
  },
  {
    "id": "LucideListEnd",
    "name": "LucideListEnd",
    "category": "General",
    "keywords": "lucide list end"
  },
  {
    "id": "LucideListFilter",
    "name": "LucideListFilter",
    "category": "General",
    "keywords": "lucide list filter"
  },
  {
    "id": "LucideListFilterPlus",
    "name": "LucideListFilterPlus",
    "category": "Symbols",
    "keywords": "lucide list filter plus"
  },
  {
    "id": "LucideListIndentDecrease",
    "name": "LucideListIndentDecrease",
    "category": "General",
    "keywords": "lucide list indent decrease"
  },
  {
    "id": "LucideListIndentIncrease",
    "name": "LucideListIndentIncrease",
    "category": "General",
    "keywords": "lucide list indent increase"
  },
  {
    "id": "LucideListMinus",
    "name": "LucideListMinus",
    "category": "Symbols",
    "keywords": "lucide list minus"
  },
  {
    "id": "LucideListMusic",
    "name": "LucideListMusic",
    "category": "Media",
    "keywords": "lucide list music"
  },
  {
    "id": "LucideListOrdered",
    "name": "LucideListOrdered",
    "category": "General",
    "keywords": "lucide list ordered"
  },
  {
    "id": "LucideListPlus",
    "name": "LucideListPlus",
    "category": "Symbols",
    "keywords": "lucide list plus"
  },
  {
    "id": "LucideListRestart",
    "name": "LucideListRestart",
    "category": "Design",
    "keywords": "lucide list restart"
  },
  {
    "id": "LucideListStart",
    "name": "LucideListStart",
    "category": "Design",
    "keywords": "lucide list start"
  },
  {
    "id": "LucideListTodo",
    "name": "LucideListTodo",
    "category": "General",
    "keywords": "lucide list todo"
  },
  {
    "id": "LucideListTree",
    "name": "LucideListTree",
    "category": "General",
    "keywords": "lucide list tree"
  },
  {
    "id": "LucideListVideo",
    "name": "LucideListVideo",
    "category": "Media",
    "keywords": "lucide list video"
  },
  {
    "id": "LucideListX",
    "name": "LucideListX",
    "category": "General",
    "keywords": "lucide list x"
  },
  {
    "id": "LucideLoader",
    "name": "LucideLoader",
    "category": "General",
    "keywords": "lucide loader"
  },
  {
    "id": "LucideLoader2",
    "name": "LucideLoader2",
    "category": "General",
    "keywords": "lucide loader2"
  },
  {
    "id": "LucideLoaderCircle",
    "name": "LucideLoaderCircle",
    "category": "General",
    "keywords": "lucide loader circle"
  },
  {
    "id": "LucideLoaderPinwheel",
    "name": "LucideLoaderPinwheel",
    "category": "General",
    "keywords": "lucide loader pinwheel"
  },
  {
    "id": "LucideLocate",
    "name": "LucideLocate",
    "category": "Navigation",
    "keywords": "lucide locate"
  },
  {
    "id": "LucideLocateFixed",
    "name": "LucideLocateFixed",
    "category": "Navigation",
    "keywords": "lucide locate fixed"
  },
  {
    "id": "LucideLocateOff",
    "name": "LucideLocateOff",
    "category": "Navigation",
    "keywords": "lucide locate off"
  },
  {
    "id": "LucideLocationEdit",
    "name": "LucideLocationEdit",
    "category": "General",
    "keywords": "lucide location edit"
  },
  {
    "id": "LucideLock",
    "name": "LucideLock",
    "category": "System",
    "keywords": "lucide lock"
  },
  {
    "id": "LucideLockKeyhole",
    "name": "LucideLockKeyhole",
    "category": "System",
    "keywords": "lucide lock keyhole"
  },
  {
    "id": "LucideLockKeyholeOpen",
    "name": "LucideLockKeyholeOpen",
    "category": "Design",
    "keywords": "lucide lock keyhole open"
  },
  {
    "id": "LucideLockOpen",
    "name": "LucideLockOpen",
    "category": "Design",
    "keywords": "lucide lock open"
  },
  {
    "id": "LucideLogIn",
    "name": "LucideLogIn",
    "category": "General",
    "keywords": "lucide log in"
  },
  {
    "id": "LucideLogOut",
    "name": "LucideLogOut",
    "category": "General",
    "keywords": "lucide log out"
  },
  {
    "id": "LucideLogs",
    "name": "LucideLogs",
    "category": "General",
    "keywords": "lucide logs"
  },
  {
    "id": "LucideLollipop",
    "name": "LucideLollipop",
    "category": "General",
    "keywords": "lucide lollipop"
  },
  {
    "id": "LucideLuggage",
    "name": "LucideLuggage",
    "category": "General",
    "keywords": "lucide luggage"
  },
  {
    "id": "LucideMSquare",
    "name": "LucideMSquare",
    "category": "General",
    "keywords": "lucide m square"
  },
  {
    "id": "LucideMagnet",
    "name": "LucideMagnet",
    "category": "General",
    "keywords": "lucide magnet"
  },
  {
    "id": "LucideMail",
    "name": "LucideMail",
    "category": "General",
    "keywords": "lucide mail"
  },
  {
    "id": "LucideMailCheck",
    "name": "LucideMailCheck",
    "category": "Symbols",
    "keywords": "lucide mail check"
  },
  {
    "id": "LucideMailMinus",
    "name": "LucideMailMinus",
    "category": "Symbols",
    "keywords": "lucide mail minus"
  },
  {
    "id": "LucideMailOpen",
    "name": "LucideMailOpen",
    "category": "Design",
    "keywords": "lucide mail open"
  },
  {
    "id": "LucideMailPlus",
    "name": "LucideMailPlus",
    "category": "Symbols",
    "keywords": "lucide mail plus"
  },
  {
    "id": "LucideMailQuestion",
    "name": "LucideMailQuestion",
    "category": "General",
    "keywords": "lucide mail question"
  },
  {
    "id": "LucideMailQuestionMark",
    "name": "LucideMailQuestionMark",
    "category": "General",
    "keywords": "lucide mail question mark"
  },
  {
    "id": "LucideMailSearch",
    "name": "LucideMailSearch",
    "category": "Symbols",
    "keywords": "lucide mail search"
  },
  {
    "id": "LucideMailWarning",
    "name": "LucideMailWarning",
    "category": "General",
    "keywords": "lucide mail warning"
  },
  {
    "id": "LucideMailX",
    "name": "LucideMailX",
    "category": "General",
    "keywords": "lucide mail x"
  },
  {
    "id": "LucideMailbox",
    "name": "LucideMailbox",
    "category": "General",
    "keywords": "lucide mailbox"
  },
  {
    "id": "LucideMails",
    "name": "LucideMails",
    "category": "General",
    "keywords": "lucide mails"
  },
  {
    "id": "LucideMap",
    "name": "LucideMap",
    "category": "General",
    "keywords": "lucide map"
  },
  {
    "id": "LucideMapMinus",
    "name": "LucideMapMinus",
    "category": "Symbols",
    "keywords": "lucide map minus"
  },
  {
    "id": "LucideMapPin",
    "name": "LucideMapPin",
    "category": "General",
    "keywords": "lucide map pin"
  },
  {
    "id": "LucideMapPinCheck",
    "name": "LucideMapPinCheck",
    "category": "Symbols",
    "keywords": "lucide map pin check"
  },
  {
    "id": "LucideMapPinCheckInside",
    "name": "LucideMapPinCheckInside",
    "category": "Symbols",
    "keywords": "lucide map pin check inside"
  },
  {
    "id": "LucideMapPinHouse",
    "name": "LucideMapPinHouse",
    "category": "General",
    "keywords": "lucide map pin house"
  },
  {
    "id": "LucideMapPinMinus",
    "name": "LucideMapPinMinus",
    "category": "Symbols",
    "keywords": "lucide map pin minus"
  },
  {
    "id": "LucideMapPinMinusInside",
    "name": "LucideMapPinMinusInside",
    "category": "Symbols",
    "keywords": "lucide map pin minus inside"
  },
  {
    "id": "LucideMapPinOff",
    "name": "LucideMapPinOff",
    "category": "General",
    "keywords": "lucide map pin off"
  },
  {
    "id": "LucideMapPinPen",
    "name": "LucideMapPinPen",
    "category": "Design",
    "keywords": "lucide map pin pen"
  },
  {
    "id": "LucideMapPinPlus",
    "name": "LucideMapPinPlus",
    "category": "Symbols",
    "keywords": "lucide map pin plus"
  },
  {
    "id": "LucideMapPinPlusInside",
    "name": "LucideMapPinPlusInside",
    "category": "Symbols",
    "keywords": "lucide map pin plus inside"
  },
  {
    "id": "LucideMapPinX",
    "name": "LucideMapPinX",
    "category": "General",
    "keywords": "lucide map pin x"
  },
  {
    "id": "LucideMapPinXInside",
    "name": "LucideMapPinXInside",
    "category": "General",
    "keywords": "lucide map pin x inside"
  },
  {
    "id": "LucideMapPinned",
    "name": "LucideMapPinned",
    "category": "General",
    "keywords": "lucide map pinned"
  },
  {
    "id": "LucideMapPlus",
    "name": "LucideMapPlus",
    "category": "Symbols",
    "keywords": "lucide map plus"
  },
  {
    "id": "LucideMars",
    "name": "LucideMars",
    "category": "General",
    "keywords": "lucide mars"
  },
  {
    "id": "LucideMarsStroke",
    "name": "LucideMarsStroke",
    "category": "General",
    "keywords": "lucide mars stroke"
  },
  {
    "id": "LucideMartini",
    "name": "LucideMartini",
    "category": "Design",
    "keywords": "lucide martini"
  },
  {
    "id": "LucideMaximize",
    "name": "LucideMaximize",
    "category": "General",
    "keywords": "lucide maximize"
  },
  {
    "id": "LucideMaximize2",
    "name": "LucideMaximize2",
    "category": "General",
    "keywords": "lucide maximize2"
  },
  {
    "id": "LucideMedal",
    "name": "LucideMedal",
    "category": "General",
    "keywords": "lucide medal"
  },
  {
    "id": "LucideMegaphone",
    "name": "LucideMegaphone",
    "category": "Devices",
    "keywords": "lucide megaphone"
  },
  {
    "id": "LucideMegaphoneOff",
    "name": "LucideMegaphoneOff",
    "category": "Devices",
    "keywords": "lucide megaphone off"
  },
  {
    "id": "LucideMeh",
    "name": "LucideMeh",
    "category": "General",
    "keywords": "lucide meh"
  },
  {
    "id": "LucideMemoryStick",
    "name": "LucideMemoryStick",
    "category": "General",
    "keywords": "lucide memory stick"
  },
  {
    "id": "LucideMenu",
    "name": "LucideMenu",
    "category": "General",
    "keywords": "lucide menu"
  },
  {
    "id": "LucideMenuSquare",
    "name": "LucideMenuSquare",
    "category": "General",
    "keywords": "lucide menu square"
  },
  {
    "id": "LucideMerge",
    "name": "LucideMerge",
    "category": "General",
    "keywords": "lucide merge"
  },
  {
    "id": "LucideMessageCircle",
    "name": "LucideMessageCircle",
    "category": "General",
    "keywords": "lucide message circle"
  },
  {
    "id": "LucideMessageCircleCode",
    "name": "LucideMessageCircleCode",
    "category": "System",
    "keywords": "lucide message circle code"
  },
  {
    "id": "LucideMessageCircleDashed",
    "name": "LucideMessageCircleDashed",
    "category": "General",
    "keywords": "lucide message circle dashed"
  },
  {
    "id": "LucideMessageCircleHeart",
    "name": "LucideMessageCircleHeart",
    "category": "Design",
    "keywords": "lucide message circle heart"
  },
  {
    "id": "LucideMessageCircleMore",
    "name": "LucideMessageCircleMore",
    "category": "General",
    "keywords": "lucide message circle more"
  },
  {
    "id": "LucideMessageCircleOff",
    "name": "LucideMessageCircleOff",
    "category": "General",
    "keywords": "lucide message circle off"
  },
  {
    "id": "LucideMessageCirclePlus",
    "name": "LucideMessageCirclePlus",
    "category": "Symbols",
    "keywords": "lucide message circle plus"
  },
  {
    "id": "LucideMessageCircleQuestion",
    "name": "LucideMessageCircleQuestion",
    "category": "General",
    "keywords": "lucide message circle question"
  },
  {
    "id": "LucideMessageCircleQuestionMark",
    "name": "LucideMessageCircleQuestionMark",
    "category": "General",
    "keywords": "lucide message circle question mark"
  },
  {
    "id": "LucideMessageCircleReply",
    "name": "LucideMessageCircleReply",
    "category": "General",
    "keywords": "lucide message circle reply"
  },
  {
    "id": "LucideMessageCircleWarning",
    "name": "LucideMessageCircleWarning",
    "category": "General",
    "keywords": "lucide message circle warning"
  },
  {
    "id": "LucideMessageCircleX",
    "name": "LucideMessageCircleX",
    "category": "General",
    "keywords": "lucide message circle x"
  },
  {
    "id": "LucideMessageSquare",
    "name": "LucideMessageSquare",
    "category": "General",
    "keywords": "lucide message square"
  },
  {
    "id": "LucideMessageSquareCode",
    "name": "LucideMessageSquareCode",
    "category": "System",
    "keywords": "lucide message square code"
  },
  {
    "id": "LucideMessageSquareDashed",
    "name": "LucideMessageSquareDashed",
    "category": "General",
    "keywords": "lucide message square dashed"
  },
  {
    "id": "LucideMessageSquareDiff",
    "name": "LucideMessageSquareDiff",
    "category": "General",
    "keywords": "lucide message square diff"
  },
  {
    "id": "LucideMessageSquareDot",
    "name": "LucideMessageSquareDot",
    "category": "Navigation",
    "keywords": "lucide message square dot"
  },
  {
    "id": "LucideMessageSquareHeart",
    "name": "LucideMessageSquareHeart",
    "category": "Design",
    "keywords": "lucide message square heart"
  },
  {
    "id": "LucideMessageSquareLock",
    "name": "LucideMessageSquareLock",
    "category": "System",
    "keywords": "lucide message square lock"
  },
  {
    "id": "LucideMessageSquareMore",
    "name": "LucideMessageSquareMore",
    "category": "General",
    "keywords": "lucide message square more"
  },
  {
    "id": "LucideMessageSquareOff",
    "name": "LucideMessageSquareOff",
    "category": "General",
    "keywords": "lucide message square off"
  },
  {
    "id": "LucideMessageSquarePlus",
    "name": "LucideMessageSquarePlus",
    "category": "Symbols",
    "keywords": "lucide message square plus"
  },
  {
    "id": "LucideMessageSquareQuote",
    "name": "LucideMessageSquareQuote",
    "category": "General",
    "keywords": "lucide message square quote"
  },
  {
    "id": "LucideMessageSquareReply",
    "name": "LucideMessageSquareReply",
    "category": "General",
    "keywords": "lucide message square reply"
  },
  {
    "id": "LucideMessageSquareShare",
    "name": "LucideMessageSquareShare",
    "category": "Symbols",
    "keywords": "lucide message square share"
  },
  {
    "id": "LucideMessageSquareText",
    "name": "LucideMessageSquareText",
    "category": "General",
    "keywords": "lucide message square text"
  },
  {
    "id": "LucideMessageSquareWarning",
    "name": "LucideMessageSquareWarning",
    "category": "General",
    "keywords": "lucide message square warning"
  },
  {
    "id": "LucideMessageSquareX",
    "name": "LucideMessageSquareX",
    "category": "General",
    "keywords": "lucide message square x"
  },
  {
    "id": "LucideMessagesSquare",
    "name": "LucideMessagesSquare",
    "category": "General",
    "keywords": "lucide messages square"
  },
  {
    "id": "LucideMic",
    "name": "LucideMic",
    "category": "Media",
    "keywords": "lucide mic"
  },
  {
    "id": "LucideMic2",
    "name": "LucideMic2",
    "category": "Media",
    "keywords": "lucide mic2"
  },
  {
    "id": "LucideMicOff",
    "name": "LucideMicOff",
    "category": "Media",
    "keywords": "lucide mic off"
  },
  {
    "id": "LucideMicVocal",
    "name": "LucideMicVocal",
    "category": "Media",
    "keywords": "lucide mic vocal"
  },
  {
    "id": "LucideMicrochip",
    "name": "LucideMicrochip",
    "category": "Media",
    "keywords": "lucide microchip"
  },
  {
    "id": "LucideMicroscope",
    "name": "LucideMicroscope",
    "category": "Media",
    "keywords": "lucide microscope"
  },
  {
    "id": "LucideMicrowave",
    "name": "LucideMicrowave",
    "category": "Media",
    "keywords": "lucide microwave"
  },
  {
    "id": "LucideMilestone",
    "name": "LucideMilestone",
    "category": "General",
    "keywords": "lucide milestone"
  },
  {
    "id": "LucideMilk",
    "name": "LucideMilk",
    "category": "General",
    "keywords": "lucide milk"
  },
  {
    "id": "LucideMilkOff",
    "name": "LucideMilkOff",
    "category": "General",
    "keywords": "lucide milk off"
  },
  {
    "id": "LucideMinimize",
    "name": "LucideMinimize",
    "category": "General",
    "keywords": "lucide minimize"
  },
  {
    "id": "LucideMinimize2",
    "name": "LucideMinimize2",
    "category": "General",
    "keywords": "lucide minimize2"
  },
  {
    "id": "LucideMinus",
    "name": "LucideMinus",
    "category": "Symbols",
    "keywords": "lucide minus"
  },
  {
    "id": "LucideMinusCircle",
    "name": "LucideMinusCircle",
    "category": "Symbols",
    "keywords": "lucide minus circle"
  },
  {
    "id": "LucideMinusSquare",
    "name": "LucideMinusSquare",
    "category": "Symbols",
    "keywords": "lucide minus square"
  },
  {
    "id": "LucideMonitor",
    "name": "LucideMonitor",
    "category": "Devices",
    "keywords": "lucide monitor"
  },
  {
    "id": "LucideMonitorCheck",
    "name": "LucideMonitorCheck",
    "category": "Devices",
    "keywords": "lucide monitor check"
  },
  {
    "id": "LucideMonitorCloud",
    "name": "LucideMonitorCloud",
    "category": "Devices",
    "keywords": "lucide monitor cloud"
  },
  {
    "id": "LucideMonitorCog",
    "name": "LucideMonitorCog",
    "category": "Devices",
    "keywords": "lucide monitor cog"
  },
  {
    "id": "LucideMonitorDot",
    "name": "LucideMonitorDot",
    "category": "Devices",
    "keywords": "lucide monitor dot"
  },
  {
    "id": "LucideMonitorDown",
    "name": "LucideMonitorDown",
    "category": "Devices",
    "keywords": "lucide monitor down"
  },
  {
    "id": "LucideMonitorOff",
    "name": "LucideMonitorOff",
    "category": "Devices",
    "keywords": "lucide monitor off"
  },
  {
    "id": "LucideMonitorPause",
    "name": "LucideMonitorPause",
    "category": "Media",
    "keywords": "lucide monitor pause"
  },
  {
    "id": "LucideMonitorPlay",
    "name": "LucideMonitorPlay",
    "category": "Media",
    "keywords": "lucide monitor play"
  },
  {
    "id": "LucideMonitorSmartphone",
    "name": "LucideMonitorSmartphone",
    "category": "Design",
    "keywords": "lucide monitor smartphone"
  },
  {
    "id": "LucideMonitorSpeaker",
    "name": "LucideMonitorSpeaker",
    "category": "Media",
    "keywords": "lucide monitor speaker"
  },
  {
    "id": "LucideMonitorStop",
    "name": "LucideMonitorStop",
    "category": "Devices",
    "keywords": "lucide monitor stop"
  },
  {
    "id": "LucideMonitorUp",
    "name": "LucideMonitorUp",
    "category": "Devices",
    "keywords": "lucide monitor up"
  },
  {
    "id": "LucideMonitorX",
    "name": "LucideMonitorX",
    "category": "Devices",
    "keywords": "lucide monitor x"
  },
  {
    "id": "LucideMoon",
    "name": "LucideMoon",
    "category": "Symbols",
    "keywords": "lucide moon"
  },
  {
    "id": "LucideMoonStar",
    "name": "LucideMoonStar",
    "category": "Symbols",
    "keywords": "lucide moon star"
  },
  {
    "id": "LucideMoreHorizontal",
    "name": "LucideMoreHorizontal",
    "category": "General",
    "keywords": "lucide more horizontal"
  },
  {
    "id": "LucideMoreVertical",
    "name": "LucideMoreVertical",
    "category": "General",
    "keywords": "lucide more vertical"
  },
  {
    "id": "LucideMotorbike",
    "name": "LucideMotorbike",
    "category": "General",
    "keywords": "lucide motorbike"
  },
  {
    "id": "LucideMountain",
    "name": "LucideMountain",
    "category": "General",
    "keywords": "lucide mountain"
  },
  {
    "id": "LucideMountainSnow",
    "name": "LucideMountainSnow",
    "category": "General",
    "keywords": "lucide mountain snow"
  },
  {
    "id": "LucideMouse",
    "name": "LucideMouse",
    "category": "Devices",
    "keywords": "lucide mouse"
  },
  {
    "id": "LucideMouseOff",
    "name": "LucideMouseOff",
    "category": "Devices",
    "keywords": "lucide mouse off"
  },
  {
    "id": "LucideMousePointer",
    "name": "LucideMousePointer",
    "category": "Devices",
    "keywords": "lucide mouse pointer"
  },
  {
    "id": "LucideMousePointer2",
    "name": "LucideMousePointer2",
    "category": "Devices",
    "keywords": "lucide mouse pointer2"
  },
  {
    "id": "LucideMousePointerBan",
    "name": "LucideMousePointerBan",
    "category": "Devices",
    "keywords": "lucide mouse pointer ban"
  },
  {
    "id": "LucideMousePointerClick",
    "name": "LucideMousePointerClick",
    "category": "Devices",
    "keywords": "lucide mouse pointer click"
  },
  {
    "id": "LucideMousePointerSquareDashed",
    "name": "LucideMousePointerSquareDashed",
    "category": "Devices",
    "keywords": "lucide mouse pointer square dashed"
  },
  {
    "id": "LucideMove",
    "name": "LucideMove",
    "category": "Navigation",
    "keywords": "lucide move"
  },
  {
    "id": "LucideMove3D",
    "name": "LucideMove3D",
    "category": "Navigation",
    "keywords": "lucide move3 d"
  },
  {
    "id": "LucideMove3d",
    "name": "LucideMove3d",
    "category": "Navigation",
    "keywords": "lucide move3d"
  },
  {
    "id": "LucideMoveDiagonal",
    "name": "LucideMoveDiagonal",
    "category": "Navigation",
    "keywords": "lucide move diagonal"
  },
  {
    "id": "LucideMoveDiagonal2",
    "name": "LucideMoveDiagonal2",
    "category": "Navigation",
    "keywords": "lucide move diagonal2"
  },
  {
    "id": "LucideMoveDown",
    "name": "LucideMoveDown",
    "category": "Navigation",
    "keywords": "lucide move down"
  },
  {
    "id": "LucideMoveDownLeft",
    "name": "LucideMoveDownLeft",
    "category": "Navigation",
    "keywords": "lucide move down left"
  },
  {
    "id": "LucideMoveDownRight",
    "name": "LucideMoveDownRight",
    "category": "Navigation",
    "keywords": "lucide move down right"
  },
  {
    "id": "LucideMoveHorizontal",
    "name": "LucideMoveHorizontal",
    "category": "Navigation",
    "keywords": "lucide move horizontal"
  },
  {
    "id": "LucideMoveLeft",
    "name": "LucideMoveLeft",
    "category": "Navigation",
    "keywords": "lucide move left"
  },
  {
    "id": "LucideMoveRight",
    "name": "LucideMoveRight",
    "category": "Navigation",
    "keywords": "lucide move right"
  },
  {
    "id": "LucideMoveUp",
    "name": "LucideMoveUp",
    "category": "Navigation",
    "keywords": "lucide move up"
  },
  {
    "id": "LucideMoveUpLeft",
    "name": "LucideMoveUpLeft",
    "category": "Navigation",
    "keywords": "lucide move up left"
  },
  {
    "id": "LucideMoveUpRight",
    "name": "LucideMoveUpRight",
    "category": "Navigation",
    "keywords": "lucide move up right"
  },
  {
    "id": "LucideMoveVertical",
    "name": "LucideMoveVertical",
    "category": "Navigation",
    "keywords": "lucide move vertical"
  },
  {
    "id": "LucideMusic",
    "name": "LucideMusic",
    "category": "Media",
    "keywords": "lucide music"
  },
  {
    "id": "LucideMusic2",
    "name": "LucideMusic2",
    "category": "Media",
    "keywords": "lucide music2"
  },
  {
    "id": "LucideMusic3",
    "name": "LucideMusic3",
    "category": "Media",
    "keywords": "lucide music3"
  },
  {
    "id": "LucideMusic4",
    "name": "LucideMusic4",
    "category": "Media",
    "keywords": "lucide music4"
  },
  {
    "id": "LucideNavigation",
    "name": "LucideNavigation",
    "category": "Navigation",
    "keywords": "lucide navigation"
  },
  {
    "id": "LucideNavigation2",
    "name": "LucideNavigation2",
    "category": "Navigation",
    "keywords": "lucide navigation2"
  },
  {
    "id": "LucideNavigation2Off",
    "name": "LucideNavigation2Off",
    "category": "Navigation",
    "keywords": "lucide navigation2 off"
  },
  {
    "id": "LucideNavigationOff",
    "name": "LucideNavigationOff",
    "category": "Navigation",
    "keywords": "lucide navigation off"
  },
  {
    "id": "LucideNetwork",
    "name": "LucideNetwork",
    "category": "General",
    "keywords": "lucide network"
  },
  {
    "id": "LucideNewspaper",
    "name": "LucideNewspaper",
    "category": "General",
    "keywords": "lucide newspaper"
  },
  {
    "id": "LucideNfc",
    "name": "LucideNfc",
    "category": "General",
    "keywords": "lucide nfc"
  },
  {
    "id": "LucideNonBinary",
    "name": "LucideNonBinary",
    "category": "System",
    "keywords": "lucide non binary"
  },
  {
    "id": "LucideNotebook",
    "name": "LucideNotebook",
    "category": "General",
    "keywords": "lucide notebook"
  },
  {
    "id": "LucideNotebookPen",
    "name": "LucideNotebookPen",
    "category": "Design",
    "keywords": "lucide notebook pen"
  },
  {
    "id": "LucideNotebookTabs",
    "name": "LucideNotebookTabs",
    "category": "General",
    "keywords": "lucide notebook tabs"
  },
  {
    "id": "LucideNotebookText",
    "name": "LucideNotebookText",
    "category": "General",
    "keywords": "lucide notebook text"
  },
  {
    "id": "LucideNotepadText",
    "name": "LucideNotepadText",
    "category": "General",
    "keywords": "lucide notepad text"
  },
  {
    "id": "LucideNotepadTextDashed",
    "name": "LucideNotepadTextDashed",
    "category": "General",
    "keywords": "lucide notepad text dashed"
  },
  {
    "id": "LucideNut",
    "name": "LucideNut",
    "category": "General",
    "keywords": "lucide nut"
  },
  {
    "id": "LucideNutOff",
    "name": "LucideNutOff",
    "category": "General",
    "keywords": "lucide nut off"
  },
  {
    "id": "LucideOctagon",
    "name": "LucideOctagon",
    "category": "Symbols",
    "keywords": "lucide octagon"
  },
  {
    "id": "LucideOctagonAlert",
    "name": "LucideOctagonAlert",
    "category": "Symbols",
    "keywords": "lucide octagon alert"
  },
  {
    "id": "LucideOctagonMinus",
    "name": "LucideOctagonMinus",
    "category": "Symbols",
    "keywords": "lucide octagon minus"
  },
  {
    "id": "LucideOctagonPause",
    "name": "LucideOctagonPause",
    "category": "Media",
    "keywords": "lucide octagon pause"
  },
  {
    "id": "LucideOctagonX",
    "name": "LucideOctagonX",
    "category": "Symbols",
    "keywords": "lucide octagon x"
  },
  {
    "id": "LucideOmega",
    "name": "LucideOmega",
    "category": "General",
    "keywords": "lucide omega"
  },
  {
    "id": "LucideOption",
    "name": "LucideOption",
    "category": "General",
    "keywords": "lucide option"
  },
  {
    "id": "LucideOrbit",
    "name": "LucideOrbit",
    "category": "General",
    "keywords": "lucide orbit"
  },
  {
    "id": "LucideOrigami",
    "name": "LucideOrigami",
    "category": "General",
    "keywords": "lucide origami"
  },
  {
    "id": "LucideOutdent",
    "name": "LucideOutdent",
    "category": "General",
    "keywords": "lucide outdent"
  },
  {
    "id": "LucidePackage",
    "name": "LucidePackage",
    "category": "General",
    "keywords": "lucide package"
  },
  {
    "id": "LucidePackage2",
    "name": "LucidePackage2",
    "category": "General",
    "keywords": "lucide package2"
  },
  {
    "id": "LucidePackageCheck",
    "name": "LucidePackageCheck",
    "category": "Symbols",
    "keywords": "lucide package check"
  },
  {
    "id": "LucidePackageMinus",
    "name": "LucidePackageMinus",
    "category": "Symbols",
    "keywords": "lucide package minus"
  },
  {
    "id": "LucidePackageOpen",
    "name": "LucidePackageOpen",
    "category": "Design",
    "keywords": "lucide package open"
  },
  {
    "id": "LucidePackagePlus",
    "name": "LucidePackagePlus",
    "category": "Symbols",
    "keywords": "lucide package plus"
  },
  {
    "id": "LucidePackageSearch",
    "name": "LucidePackageSearch",
    "category": "Symbols",
    "keywords": "lucide package search"
  },
  {
    "id": "LucidePackageX",
    "name": "LucidePackageX",
    "category": "General",
    "keywords": "lucide package x"
  },
  {
    "id": "LucidePaintBucket",
    "name": "LucidePaintBucket",
    "category": "Design",
    "keywords": "lucide paint bucket"
  },
  {
    "id": "LucidePaintRoller",
    "name": "LucidePaintRoller",
    "category": "Design",
    "keywords": "lucide paint roller"
  },
  {
    "id": "LucidePaintbrush",
    "name": "LucidePaintbrush",
    "category": "Design",
    "keywords": "lucide paintbrush"
  },
  {
    "id": "LucidePaintbrush2",
    "name": "LucidePaintbrush2",
    "category": "Design",
    "keywords": "lucide paintbrush2"
  },
  {
    "id": "LucidePaintbrushVertical",
    "name": "LucidePaintbrushVertical",
    "category": "Design",
    "keywords": "lucide paintbrush vertical"
  },
  {
    "id": "LucidePalette",
    "name": "LucidePalette",
    "category": "Design",
    "keywords": "lucide palette"
  },
  {
    "id": "LucidePalmtree",
    "name": "LucidePalmtree",
    "category": "General",
    "keywords": "lucide palmtree"
  },
  {
    "id": "LucidePanda",
    "name": "LucidePanda",
    "category": "General",
    "keywords": "lucide panda"
  },
  {
    "id": "LucidePanelBottom",
    "name": "LucidePanelBottom",
    "category": "General",
    "keywords": "lucide panel bottom"
  },
  {
    "id": "LucidePanelBottomClose",
    "name": "LucidePanelBottomClose",
    "category": "General",
    "keywords": "lucide panel bottom close"
  },
  {
    "id": "LucidePanelBottomDashed",
    "name": "LucidePanelBottomDashed",
    "category": "General",
    "keywords": "lucide panel bottom dashed"
  },
  {
    "id": "LucidePanelBottomInactive",
    "name": "LucidePanelBottomInactive",
    "category": "General",
    "keywords": "lucide panel bottom inactive"
  },
  {
    "id": "LucidePanelBottomOpen",
    "name": "LucidePanelBottomOpen",
    "category": "Design",
    "keywords": "lucide panel bottom open"
  },
  {
    "id": "LucidePanelLeft",
    "name": "LucidePanelLeft",
    "category": "General",
    "keywords": "lucide panel left"
  },
  {
    "id": "LucidePanelLeftClose",
    "name": "LucidePanelLeftClose",
    "category": "General",
    "keywords": "lucide panel left close"
  },
  {
    "id": "LucidePanelLeftDashed",
    "name": "LucidePanelLeftDashed",
    "category": "General",
    "keywords": "lucide panel left dashed"
  },
  {
    "id": "LucidePanelLeftInactive",
    "name": "LucidePanelLeftInactive",
    "category": "General",
    "keywords": "lucide panel left inactive"
  },
  {
    "id": "LucidePanelLeftOpen",
    "name": "LucidePanelLeftOpen",
    "category": "Design",
    "keywords": "lucide panel left open"
  },
  {
    "id": "LucidePanelLeftRightDashed",
    "name": "LucidePanelLeftRightDashed",
    "category": "General",
    "keywords": "lucide panel left right dashed"
  },
  {
    "id": "LucidePanelRight",
    "name": "LucidePanelRight",
    "category": "General",
    "keywords": "lucide panel right"
  },
  {
    "id": "LucidePanelRightClose",
    "name": "LucidePanelRightClose",
    "category": "General",
    "keywords": "lucide panel right close"
  },
  {
    "id": "LucidePanelRightDashed",
    "name": "LucidePanelRightDashed",
    "category": "General",
    "keywords": "lucide panel right dashed"
  },
  {
    "id": "LucidePanelRightInactive",
    "name": "LucidePanelRightInactive",
    "category": "General",
    "keywords": "lucide panel right inactive"
  },
  {
    "id": "LucidePanelRightOpen",
    "name": "LucidePanelRightOpen",
    "category": "Design",
    "keywords": "lucide panel right open"
  },
  {
    "id": "LucidePanelTop",
    "name": "LucidePanelTop",
    "category": "General",
    "keywords": "lucide panel top"
  },
  {
    "id": "LucidePanelTopBottomDashed",
    "name": "LucidePanelTopBottomDashed",
    "category": "General",
    "keywords": "lucide panel top bottom dashed"
  },
  {
    "id": "LucidePanelTopClose",
    "name": "LucidePanelTopClose",
    "category": "General",
    "keywords": "lucide panel top close"
  },
  {
    "id": "LucidePanelTopDashed",
    "name": "LucidePanelTopDashed",
    "category": "General",
    "keywords": "lucide panel top dashed"
  },
  {
    "id": "LucidePanelTopInactive",
    "name": "LucidePanelTopInactive",
    "category": "General",
    "keywords": "lucide panel top inactive"
  },
  {
    "id": "LucidePanelTopOpen",
    "name": "LucidePanelTopOpen",
    "category": "Design",
    "keywords": "lucide panel top open"
  },
  {
    "id": "LucidePanelsLeftBottom",
    "name": "LucidePanelsLeftBottom",
    "category": "General",
    "keywords": "lucide panels left bottom"
  },
  {
    "id": "LucidePanelsLeftRight",
    "name": "LucidePanelsLeftRight",
    "category": "General",
    "keywords": "lucide panels left right"
  },
  {
    "id": "LucidePanelsRightBottom",
    "name": "LucidePanelsRightBottom",
    "category": "General",
    "keywords": "lucide panels right bottom"
  },
  {
    "id": "LucidePanelsTopBottom",
    "name": "LucidePanelsTopBottom",
    "category": "General",
    "keywords": "lucide panels top bottom"
  },
  {
    "id": "LucidePanelsTopLeft",
    "name": "LucidePanelsTopLeft",
    "category": "General",
    "keywords": "lucide panels top left"
  },
  {
    "id": "LucidePaperclip",
    "name": "LucidePaperclip",
    "category": "General",
    "keywords": "lucide paperclip"
  },
  {
    "id": "LucideParentheses",
    "name": "LucideParentheses",
    "category": "General",
    "keywords": "lucide parentheses"
  },
  {
    "id": "LucideParkingCircle",
    "name": "LucideParkingCircle",
    "category": "General",
    "keywords": "lucide parking circle"
  },
  {
    "id": "LucideParkingCircleOff",
    "name": "LucideParkingCircleOff",
    "category": "General",
    "keywords": "lucide parking circle off"
  },
  {
    "id": "LucideParkingMeter",
    "name": "LucideParkingMeter",
    "category": "General",
    "keywords": "lucide parking meter"
  },
  {
    "id": "LucideParkingSquare",
    "name": "LucideParkingSquare",
    "category": "General",
    "keywords": "lucide parking square"
  },
  {
    "id": "LucideParkingSquareOff",
    "name": "LucideParkingSquareOff",
    "category": "General",
    "keywords": "lucide parking square off"
  },
  {
    "id": "LucidePartyPopper",
    "name": "LucidePartyPopper",
    "category": "Design",
    "keywords": "lucide party popper"
  },
  {
    "id": "LucidePause",
    "name": "LucidePause",
    "category": "Media",
    "keywords": "lucide pause"
  },
  {
    "id": "LucidePauseCircle",
    "name": "LucidePauseCircle",
    "category": "Media",
    "keywords": "lucide pause circle"
  },
  {
    "id": "LucidePauseOctagon",
    "name": "LucidePauseOctagon",
    "category": "Media",
    "keywords": "lucide pause octagon"
  },
  {
    "id": "LucidePawPrint",
    "name": "LucidePawPrint",
    "category": "General",
    "keywords": "lucide paw print"
  },
  {
    "id": "LucidePcCase",
    "name": "LucidePcCase",
    "category": "General",
    "keywords": "lucide pc case"
  },
  {
    "id": "LucidePen",
    "name": "LucidePen",
    "category": "Design",
    "keywords": "lucide pen"
  },
  {
    "id": "LucidePenBox",
    "name": "LucidePenBox",
    "category": "Design",
    "keywords": "lucide pen box"
  },
  {
    "id": "LucidePenLine",
    "name": "LucidePenLine",
    "category": "Design",
    "keywords": "lucide pen line"
  },
  {
    "id": "LucidePenOff",
    "name": "LucidePenOff",
    "category": "Design",
    "keywords": "lucide pen off"
  },
  {
    "id": "LucidePenSquare",
    "name": "LucidePenSquare",
    "category": "Design",
    "keywords": "lucide pen square"
  },
  {
    "id": "LucidePenTool",
    "name": "LucidePenTool",
    "category": "Design",
    "keywords": "lucide pen tool"
  },
  {
    "id": "LucidePencil",
    "name": "LucidePencil",
    "category": "Design",
    "keywords": "lucide pencil"
  },
  {
    "id": "LucidePencilLine",
    "name": "LucidePencilLine",
    "category": "Design",
    "keywords": "lucide pencil line"
  },
  {
    "id": "LucidePencilOff",
    "name": "LucidePencilOff",
    "category": "Design",
    "keywords": "lucide pencil off"
  },
  {
    "id": "LucidePencilRuler",
    "name": "LucidePencilRuler",
    "category": "Design",
    "keywords": "lucide pencil ruler"
  },
  {
    "id": "LucidePentagon",
    "name": "LucidePentagon",
    "category": "Design",
    "keywords": "lucide pentagon"
  },
  {
    "id": "LucidePercent",
    "name": "LucidePercent",
    "category": "General",
    "keywords": "lucide percent"
  },
  {
    "id": "LucidePercentCircle",
    "name": "LucidePercentCircle",
    "category": "General",
    "keywords": "lucide percent circle"
  },
  {
    "id": "LucidePercentDiamond",
    "name": "LucidePercentDiamond",
    "category": "General",
    "keywords": "lucide percent diamond"
  },
  {
    "id": "LucidePercentSquare",
    "name": "LucidePercentSquare",
    "category": "General",
    "keywords": "lucide percent square"
  },
  {
    "id": "LucidePersonStanding",
    "name": "LucidePersonStanding",
    "category": "General",
    "keywords": "lucide person standing"
  },
  {
    "id": "LucidePhilippinePeso",
    "name": "LucidePhilippinePeso",
    "category": "General",
    "keywords": "lucide philippine peso"
  },
  {
    "id": "LucidePhone",
    "name": "LucidePhone",
    "category": "Devices",
    "keywords": "lucide phone"
  },
  {
    "id": "LucidePhoneCall",
    "name": "LucidePhoneCall",
    "category": "Devices",
    "keywords": "lucide phone call"
  },
  {
    "id": "LucidePhoneForwarded",
    "name": "LucidePhoneForwarded",
    "category": "Devices",
    "keywords": "lucide phone forwarded"
  },
  {
    "id": "LucidePhoneIncoming",
    "name": "LucidePhoneIncoming",
    "category": "Devices",
    "keywords": "lucide phone incoming"
  },
  {
    "id": "LucidePhoneMissed",
    "name": "LucidePhoneMissed",
    "category": "Devices",
    "keywords": "lucide phone missed"
  },
  {
    "id": "LucidePhoneOff",
    "name": "LucidePhoneOff",
    "category": "Devices",
    "keywords": "lucide phone off"
  },
  {
    "id": "LucidePhoneOutgoing",
    "name": "LucidePhoneOutgoing",
    "category": "Devices",
    "keywords": "lucide phone outgoing"
  },
  {
    "id": "LucidePi",
    "name": "LucidePi",
    "category": "General",
    "keywords": "lucide pi"
  },
  {
    "id": "LucidePiSquare",
    "name": "LucidePiSquare",
    "category": "General",
    "keywords": "lucide pi square"
  },
  {
    "id": "LucidePiano",
    "name": "LucidePiano",
    "category": "General",
    "keywords": "lucide piano"
  },
  {
    "id": "LucidePickaxe",
    "name": "LucidePickaxe",
    "category": "General",
    "keywords": "lucide pickaxe"
  },
  {
    "id": "LucidePictureInPicture",
    "name": "LucidePictureInPicture",
    "category": "General",
    "keywords": "lucide picture in picture"
  },
  {
    "id": "LucidePictureInPicture2",
    "name": "LucidePictureInPicture2",
    "category": "General",
    "keywords": "lucide picture in picture2"
  },
  {
    "id": "LucidePieChart",
    "name": "LucidePieChart",
    "category": "Design",
    "keywords": "lucide pie chart"
  },
  {
    "id": "LucidePiggyBank",
    "name": "LucidePiggyBank",
    "category": "General",
    "keywords": "lucide piggy bank"
  },
  {
    "id": "LucidePilcrow",
    "name": "LucidePilcrow",
    "category": "General",
    "keywords": "lucide pilcrow"
  },
  {
    "id": "LucidePilcrowLeft",
    "name": "LucidePilcrowLeft",
    "category": "General",
    "keywords": "lucide pilcrow left"
  },
  {
    "id": "LucidePilcrowRight",
    "name": "LucidePilcrowRight",
    "category": "General",
    "keywords": "lucide pilcrow right"
  },
  {
    "id": "LucidePilcrowSquare",
    "name": "LucidePilcrowSquare",
    "category": "General",
    "keywords": "lucide pilcrow square"
  },
  {
    "id": "LucidePill",
    "name": "LucidePill",
    "category": "General",
    "keywords": "lucide pill"
  },
  {
    "id": "LucidePillBottle",
    "name": "LucidePillBottle",
    "category": "General",
    "keywords": "lucide pill bottle"
  },
  {
    "id": "LucidePin",
    "name": "LucidePin",
    "category": "General",
    "keywords": "lucide pin"
  },
  {
    "id": "LucidePinOff",
    "name": "LucidePinOff",
    "category": "General",
    "keywords": "lucide pin off"
  },
  {
    "id": "LucidePipette",
    "name": "LucidePipette",
    "category": "General",
    "keywords": "lucide pipette"
  },
  {
    "id": "LucidePizza",
    "name": "LucidePizza",
    "category": "General",
    "keywords": "lucide pizza"
  },
  {
    "id": "LucidePlane",
    "name": "LucidePlane",
    "category": "General",
    "keywords": "lucide plane"
  },
  {
    "id": "LucidePlaneLanding",
    "name": "LucidePlaneLanding",
    "category": "General",
    "keywords": "lucide plane landing"
  },
  {
    "id": "LucidePlaneTakeoff",
    "name": "LucidePlaneTakeoff",
    "category": "General",
    "keywords": "lucide plane takeoff"
  },
  {
    "id": "LucidePlay",
    "name": "LucidePlay",
    "category": "Media",
    "keywords": "lucide play"
  },
  {
    "id": "LucidePlayCircle",
    "name": "LucidePlayCircle",
    "category": "Media",
    "keywords": "lucide play circle"
  },
  {
    "id": "LucidePlaySquare",
    "name": "LucidePlaySquare",
    "category": "Media",
    "keywords": "lucide play square"
  },
  {
    "id": "LucidePlug",
    "name": "LucidePlug",
    "category": "General",
    "keywords": "lucide plug"
  },
  {
    "id": "LucidePlug2",
    "name": "LucidePlug2",
    "category": "General",
    "keywords": "lucide plug2"
  },
  {
    "id": "LucidePlugZap",
    "name": "LucidePlugZap",
    "category": "Symbols",
    "keywords": "lucide plug zap"
  },
  {
    "id": "LucidePlugZap2",
    "name": "LucidePlugZap2",
    "category": "Symbols",
    "keywords": "lucide plug zap2"
  },
  {
    "id": "LucidePlus",
    "name": "LucidePlus",
    "category": "Symbols",
    "keywords": "lucide plus"
  },
  {
    "id": "LucidePlusCircle",
    "name": "LucidePlusCircle",
    "category": "Symbols",
    "keywords": "lucide plus circle"
  },
  {
    "id": "LucidePlusSquare",
    "name": "LucidePlusSquare",
    "category": "Symbols",
    "keywords": "lucide plus square"
  },
  {
    "id": "LucidePocket",
    "name": "LucidePocket",
    "category": "General",
    "keywords": "lucide pocket"
  },
  {
    "id": "LucidePocketKnife",
    "name": "LucidePocketKnife",
    "category": "General",
    "keywords": "lucide pocket knife"
  },
  {
    "id": "LucidePodcast",
    "name": "LucidePodcast",
    "category": "Media",
    "keywords": "lucide podcast"
  },
  {
    "id": "LucidePointer",
    "name": "LucidePointer",
    "category": "General",
    "keywords": "lucide pointer"
  },
  {
    "id": "LucidePointerOff",
    "name": "LucidePointerOff",
    "category": "General",
    "keywords": "lucide pointer off"
  },
  {
    "id": "LucidePopcorn",
    "name": "LucidePopcorn",
    "category": "General",
    "keywords": "lucide popcorn"
  },
  {
    "id": "LucidePopsicle",
    "name": "LucidePopsicle",
    "category": "General",
    "keywords": "lucide popsicle"
  },
  {
    "id": "LucidePoundSterling",
    "name": "LucidePoundSterling",
    "category": "General",
    "keywords": "lucide pound sterling"
  },
  {
    "id": "LucidePower",
    "name": "LucidePower",
    "category": "Devices",
    "keywords": "lucide power"
  },
  {
    "id": "LucidePowerCircle",
    "name": "LucidePowerCircle",
    "category": "Devices",
    "keywords": "lucide power circle"
  },
  {
    "id": "LucidePowerOff",
    "name": "LucidePowerOff",
    "category": "Devices",
    "keywords": "lucide power off"
  },
  {
    "id": "LucidePowerSquare",
    "name": "LucidePowerSquare",
    "category": "Devices",
    "keywords": "lucide power square"
  },
  {
    "id": "LucidePresentation",
    "name": "LucidePresentation",
    "category": "General",
    "keywords": "lucide presentation"
  },
  {
    "id": "LucidePrinter",
    "name": "LucidePrinter",
    "category": "Devices",
    "keywords": "lucide printer"
  },
  {
    "id": "LucidePrinterCheck",
    "name": "LucidePrinterCheck",
    "category": "Devices",
    "keywords": "lucide printer check"
  },
  {
    "id": "LucideProjector",
    "name": "LucideProjector",
    "category": "General",
    "keywords": "lucide projector"
  },
  {
    "id": "LucideProportions",
    "name": "LucideProportions",
    "category": "General",
    "keywords": "lucide proportions"
  },
  {
    "id": "LucidePuzzle",
    "name": "LucidePuzzle",
    "category": "General",
    "keywords": "lucide puzzle"
  },
  {
    "id": "LucidePyramid",
    "name": "LucidePyramid",
    "category": "General",
    "keywords": "lucide pyramid"
  },
  {
    "id": "LucideQrCode",
    "name": "LucideQrCode",
    "category": "System",
    "keywords": "lucide qr code"
  },
  {
    "id": "LucideQuote",
    "name": "LucideQuote",
    "category": "General",
    "keywords": "lucide quote"
  },
  {
    "id": "LucideRabbit",
    "name": "LucideRabbit",
    "category": "General",
    "keywords": "lucide rabbit"
  },
  {
    "id": "LucideRadar",
    "name": "LucideRadar",
    "category": "General",
    "keywords": "lucide radar"
  },
  {
    "id": "LucideRadiation",
    "name": "LucideRadiation",
    "category": "General",
    "keywords": "lucide radiation"
  },
  {
    "id": "LucideRadical",
    "name": "LucideRadical",
    "category": "General",
    "keywords": "lucide radical"
  },
  {
    "id": "LucideRadio",
    "name": "LucideRadio",
    "category": "Media",
    "keywords": "lucide radio"
  },
  {
    "id": "LucideRadioReceiver",
    "name": "LucideRadioReceiver",
    "category": "Media",
    "keywords": "lucide radio receiver"
  },
  {
    "id": "LucideRadioTower",
    "name": "LucideRadioTower",
    "category": "Media",
    "keywords": "lucide radio tower"
  },
  {
    "id": "LucideRadius",
    "name": "LucideRadius",
    "category": "General",
    "keywords": "lucide radius"
  },
  {
    "id": "LucideRailSymbol",
    "name": "LucideRailSymbol",
    "category": "General",
    "keywords": "lucide rail symbol"
  },
  {
    "id": "LucideRainbow",
    "name": "LucideRainbow",
    "category": "General",
    "keywords": "lucide rainbow"
  },
  {
    "id": "LucideRat",
    "name": "LucideRat",
    "category": "General",
    "keywords": "lucide rat"
  },
  {
    "id": "LucideRatio",
    "name": "LucideRatio",
    "category": "General",
    "keywords": "lucide ratio"
  },
  {
    "id": "LucideReceipt",
    "name": "LucideReceipt",
    "category": "General",
    "keywords": "lucide receipt"
  },
  {
    "id": "LucideReceiptCent",
    "name": "LucideReceiptCent",
    "category": "General",
    "keywords": "lucide receipt cent"
  },
  {
    "id": "LucideReceiptEuro",
    "name": "LucideReceiptEuro",
    "category": "General",
    "keywords": "lucide receipt euro"
  },
  {
    "id": "LucideReceiptIndianRupee",
    "name": "LucideReceiptIndianRupee",
    "category": "General",
    "keywords": "lucide receipt indian rupee"
  },
  {
    "id": "LucideReceiptJapaneseYen",
    "name": "LucideReceiptJapaneseYen",
    "category": "Symbols",
    "keywords": "lucide receipt japanese yen"
  },
  {
    "id": "LucideReceiptPoundSterling",
    "name": "LucideReceiptPoundSterling",
    "category": "General",
    "keywords": "lucide receipt pound sterling"
  },
  {
    "id": "LucideReceiptRussianRuble",
    "name": "LucideReceiptRussianRuble",
    "category": "General",
    "keywords": "lucide receipt russian ruble"
  },
  {
    "id": "LucideReceiptSwissFranc",
    "name": "LucideReceiptSwissFranc",
    "category": "General",
    "keywords": "lucide receipt swiss franc"
  },
  {
    "id": "LucideReceiptText",
    "name": "LucideReceiptText",
    "category": "General",
    "keywords": "lucide receipt text"
  },
  {
    "id": "LucideReceiptTurkishLira",
    "name": "LucideReceiptTurkishLira",
    "category": "General",
    "keywords": "lucide receipt turkish lira"
  },
  {
    "id": "LucideRectangleCircle",
    "name": "LucideRectangleCircle",
    "category": "General",
    "keywords": "lucide rectangle circle"
  },
  {
    "id": "LucideRectangleEllipsis",
    "name": "LucideRectangleEllipsis",
    "category": "General",
    "keywords": "lucide rectangle ellipsis"
  },
  {
    "id": "LucideRectangleGoggles",
    "name": "LucideRectangleGoggles",
    "category": "General",
    "keywords": "lucide rectangle goggles"
  },
  {
    "id": "LucideRectangleHorizontal",
    "name": "LucideRectangleHorizontal",
    "category": "General",
    "keywords": "lucide rectangle horizontal"
  },
  {
    "id": "LucideRectangleVertical",
    "name": "LucideRectangleVertical",
    "category": "General",
    "keywords": "lucide rectangle vertical"
  },
  {
    "id": "LucideRecycle",
    "name": "LucideRecycle",
    "category": "General",
    "keywords": "lucide recycle"
  },
  {
    "id": "LucideRedo",
    "name": "LucideRedo",
    "category": "Navigation",
    "keywords": "lucide redo"
  },
  {
    "id": "LucideRedo2",
    "name": "LucideRedo2",
    "category": "Navigation",
    "keywords": "lucide redo2"
  },
  {
    "id": "LucideRedoDot",
    "name": "LucideRedoDot",
    "category": "Navigation",
    "keywords": "lucide redo dot"
  },
  {
    "id": "LucideRefreshCcw",
    "name": "LucideRefreshCcw",
    "category": "Navigation",
    "keywords": "lucide refresh ccw"
  },
  {
    "id": "LucideRefreshCcwDot",
    "name": "LucideRefreshCcwDot",
    "category": "Navigation",
    "keywords": "lucide refresh ccw dot"
  },
  {
    "id": "LucideRefreshCw",
    "name": "LucideRefreshCw",
    "category": "Navigation",
    "keywords": "lucide refresh cw"
  },
  {
    "id": "LucideRefreshCwOff",
    "name": "LucideRefreshCwOff",
    "category": "Navigation",
    "keywords": "lucide refresh cw off"
  },
  {
    "id": "LucideRefrigerator",
    "name": "LucideRefrigerator",
    "category": "General",
    "keywords": "lucide refrigerator"
  },
  {
    "id": "LucideRegex",
    "name": "LucideRegex",
    "category": "General",
    "keywords": "lucide regex"
  },
  {
    "id": "LucideRemoveFormatting",
    "name": "LucideRemoveFormatting",
    "category": "Navigation",
    "keywords": "lucide remove formatting"
  },
  {
    "id": "LucideRepeat",
    "name": "LucideRepeat",
    "category": "Navigation",
    "keywords": "lucide repeat"
  },
  {
    "id": "LucideRepeat1",
    "name": "LucideRepeat1",
    "category": "Navigation",
    "keywords": "lucide repeat1"
  },
  {
    "id": "LucideRepeat2",
    "name": "LucideRepeat2",
    "category": "Navigation",
    "keywords": "lucide repeat2"
  },
  {
    "id": "LucideReplace",
    "name": "LucideReplace",
    "category": "General",
    "keywords": "lucide replace"
  },
  {
    "id": "LucideReplaceAll",
    "name": "LucideReplaceAll",
    "category": "General",
    "keywords": "lucide replace all"
  },
  {
    "id": "LucideReply",
    "name": "LucideReply",
    "category": "General",
    "keywords": "lucide reply"
  },
  {
    "id": "LucideReplyAll",
    "name": "LucideReplyAll",
    "category": "General",
    "keywords": "lucide reply all"
  },
  {
    "id": "LucideRewind",
    "name": "LucideRewind",
    "category": "General",
    "keywords": "lucide rewind"
  },
  {
    "id": "LucideRibbon",
    "name": "LucideRibbon",
    "category": "General",
    "keywords": "lucide ribbon"
  },
  {
    "id": "LucideRocket",
    "name": "LucideRocket",
    "category": "General",
    "keywords": "lucide rocket"
  },
  {
    "id": "LucideRockingChair",
    "name": "LucideRockingChair",
    "category": "General",
    "keywords": "lucide rocking chair"
  },
  {
    "id": "LucideRollerCoaster",
    "name": "LucideRollerCoaster",
    "category": "General",
    "keywords": "lucide roller coaster"
  },
  {
    "id": "LucideRose",
    "name": "LucideRose",
    "category": "General",
    "keywords": "lucide rose"
  },
  {
    "id": "LucideRotate3D",
    "name": "LucideRotate3D",
    "category": "Navigation",
    "keywords": "lucide rotate3 d"
  },
  {
    "id": "LucideRotate3d",
    "name": "LucideRotate3d",
    "category": "Navigation",
    "keywords": "lucide rotate3d"
  },
  {
    "id": "LucideRotateCcw",
    "name": "LucideRotateCcw",
    "category": "Navigation",
    "keywords": "lucide rotate ccw"
  },
  {
    "id": "LucideRotateCcwKey",
    "name": "LucideRotateCcwKey",
    "category": "Navigation",
    "keywords": "lucide rotate ccw key"
  },
  {
    "id": "LucideRotateCcwSquare",
    "name": "LucideRotateCcwSquare",
    "category": "Navigation",
    "keywords": "lucide rotate ccw square"
  },
  {
    "id": "LucideRotateCw",
    "name": "LucideRotateCw",
    "category": "Navigation",
    "keywords": "lucide rotate cw"
  },
  {
    "id": "LucideRotateCwSquare",
    "name": "LucideRotateCwSquare",
    "category": "Navigation",
    "keywords": "lucide rotate cw square"
  },
  {
    "id": "LucideRoute",
    "name": "LucideRoute",
    "category": "General",
    "keywords": "lucide route"
  },
  {
    "id": "LucideRouteOff",
    "name": "LucideRouteOff",
    "category": "General",
    "keywords": "lucide route off"
  },
  {
    "id": "LucideRouter",
    "name": "LucideRouter",
    "category": "General",
    "keywords": "lucide router"
  },
  {
    "id": "LucideRows",
    "name": "LucideRows",
    "category": "General",
    "keywords": "lucide rows"
  },
  {
    "id": "LucideRows2",
    "name": "LucideRows2",
    "category": "General",
    "keywords": "lucide rows2"
  },
  {
    "id": "LucideRows3",
    "name": "LucideRows3",
    "category": "General",
    "keywords": "lucide rows3"
  },
  {
    "id": "LucideRows4",
    "name": "LucideRows4",
    "category": "General",
    "keywords": "lucide rows4"
  },
  {
    "id": "LucideRss",
    "name": "LucideRss",
    "category": "General",
    "keywords": "lucide rss"
  },
  {
    "id": "LucideRuler",
    "name": "LucideRuler",
    "category": "Design",
    "keywords": "lucide ruler"
  },
  {
    "id": "LucideRulerDimensionLine",
    "name": "LucideRulerDimensionLine",
    "category": "Design",
    "keywords": "lucide ruler dimension line"
  },
  {
    "id": "LucideRussianRuble",
    "name": "LucideRussianRuble",
    "category": "General",
    "keywords": "lucide russian ruble"
  },
  {
    "id": "LucideSailboat",
    "name": "LucideSailboat",
    "category": "General",
    "keywords": "lucide sailboat"
  },
  {
    "id": "LucideSalad",
    "name": "LucideSalad",
    "category": "General",
    "keywords": "lucide salad"
  },
  {
    "id": "LucideSandwich",
    "name": "LucideSandwich",
    "category": "General",
    "keywords": "lucide sandwich"
  },
  {
    "id": "LucideSatellite",
    "name": "LucideSatellite",
    "category": "General",
    "keywords": "lucide satellite"
  },
  {
    "id": "LucideSatelliteDish",
    "name": "LucideSatelliteDish",
    "category": "General",
    "keywords": "lucide satellite dish"
  },
  {
    "id": "LucideSaudiRiyal",
    "name": "LucideSaudiRiyal",
    "category": "General",
    "keywords": "lucide saudi riyal"
  },
  {
    "id": "LucideSave",
    "name": "LucideSave",
    "category": "System",
    "keywords": "lucide save"
  },
  {
    "id": "LucideSaveAll",
    "name": "LucideSaveAll",
    "category": "System",
    "keywords": "lucide save all"
  },
  {
    "id": "LucideSaveOff",
    "name": "LucideSaveOff",
    "category": "System",
    "keywords": "lucide save off"
  },
  {
    "id": "LucideScale",
    "name": "LucideScale",
    "category": "General",
    "keywords": "lucide scale"
  },
  {
    "id": "LucideScale3D",
    "name": "LucideScale3D",
    "category": "General",
    "keywords": "lucide scale3 d"
  },
  {
    "id": "LucideScale3d",
    "name": "LucideScale3d",
    "category": "General",
    "keywords": "lucide scale3d"
  },
  {
    "id": "LucideScaling",
    "name": "LucideScaling",
    "category": "General",
    "keywords": "lucide scaling"
  },
  {
    "id": "LucideScan",
    "name": "LucideScan",
    "category": "General",
    "keywords": "lucide scan"
  },
  {
    "id": "LucideScanBarcode",
    "name": "LucideScanBarcode",
    "category": "System",
    "keywords": "lucide scan barcode"
  },
  {
    "id": "LucideScanEye",
    "name": "LucideScanEye",
    "category": "Symbols",
    "keywords": "lucide scan eye"
  },
  {
    "id": "LucideScanFace",
    "name": "LucideScanFace",
    "category": "General",
    "keywords": "lucide scan face"
  },
  {
    "id": "LucideScanHeart",
    "name": "LucideScanHeart",
    "category": "Design",
    "keywords": "lucide scan heart"
  },
  {
    "id": "LucideScanLine",
    "name": "LucideScanLine",
    "category": "General",
    "keywords": "lucide scan line"
  },
  {
    "id": "LucideScanQrCode",
    "name": "LucideScanQrCode",
    "category": "System",
    "keywords": "lucide scan qr code"
  },
  {
    "id": "LucideScanSearch",
    "name": "LucideScanSearch",
    "category": "Symbols",
    "keywords": "lucide scan search"
  },
  {
    "id": "LucideScanText",
    "name": "LucideScanText",
    "category": "General",
    "keywords": "lucide scan text"
  },
  {
    "id": "LucideScatterChart",
    "name": "LucideScatterChart",
    "category": "Design",
    "keywords": "lucide scatter chart"
  },
  {
    "id": "LucideSchool",
    "name": "LucideSchool",
    "category": "General",
    "keywords": "lucide school"
  },
  {
    "id": "LucideSchool2",
    "name": "LucideSchool2",
    "category": "General",
    "keywords": "lucide school2"
  },
  {
    "id": "LucideScissors",
    "name": "LucideScissors",
    "category": "Design",
    "keywords": "lucide scissors"
  },
  {
    "id": "LucideScissorsLineDashed",
    "name": "LucideScissorsLineDashed",
    "category": "Design",
    "keywords": "lucide scissors line dashed"
  },
  {
    "id": "LucideScissorsSquare",
    "name": "LucideScissorsSquare",
    "category": "Design",
    "keywords": "lucide scissors square"
  },
  {
    "id": "LucideScissorsSquareDashedBottom",
    "name": "LucideScissorsSquareDashedBottom",
    "category": "Design",
    "keywords": "lucide scissors square dashed bottom"
  },
  {
    "id": "LucideScreenShare",
    "name": "LucideScreenShare",
    "category": "Devices",
    "keywords": "lucide screen share"
  },
  {
    "id": "LucideScreenShareOff",
    "name": "LucideScreenShareOff",
    "category": "Devices",
    "keywords": "lucide screen share off"
  },
  {
    "id": "LucideScroll",
    "name": "LucideScroll",
    "category": "General",
    "keywords": "lucide scroll"
  },
  {
    "id": "LucideScrollText",
    "name": "LucideScrollText",
    "category": "General",
    "keywords": "lucide scroll text"
  },
  {
    "id": "LucideSearch",
    "name": "LucideSearch",
    "category": "Symbols",
    "keywords": "lucide search"
  },
  {
    "id": "LucideSearchCheck",
    "name": "LucideSearchCheck",
    "category": "Symbols",
    "keywords": "lucide search check"
  },
  {
    "id": "LucideSearchCode",
    "name": "LucideSearchCode",
    "category": "System",
    "keywords": "lucide search code"
  },
  {
    "id": "LucideSearchSlash",
    "name": "LucideSearchSlash",
    "category": "Symbols",
    "keywords": "lucide search slash"
  },
  {
    "id": "LucideSearchX",
    "name": "LucideSearchX",
    "category": "Symbols",
    "keywords": "lucide search x"
  },
  {
    "id": "LucideSection",
    "name": "LucideSection",
    "category": "General",
    "keywords": "lucide section"
  },
  {
    "id": "LucideSend",
    "name": "LucideSend",
    "category": "General",
    "keywords": "lucide send"
  },
  {
    "id": "LucideSendHorizonal",
    "name": "LucideSendHorizonal",
    "category": "General",
    "keywords": "lucide send horizonal"
  },
  {
    "id": "LucideSendHorizontal",
    "name": "LucideSendHorizontal",
    "category": "General",
    "keywords": "lucide send horizontal"
  },
  {
    "id": "LucideSendToBack",
    "name": "LucideSendToBack",
    "category": "General",
    "keywords": "lucide send to back"
  },
  {
    "id": "LucideSeparatorHorizontal",
    "name": "LucideSeparatorHorizontal",
    "category": "General",
    "keywords": "lucide separator horizontal"
  },
  {
    "id": "LucideSeparatorVertical",
    "name": "LucideSeparatorVertical",
    "category": "General",
    "keywords": "lucide separator vertical"
  },
  {
    "id": "LucideServer",
    "name": "LucideServer",
    "category": "Devices",
    "keywords": "lucide server"
  },
  {
    "id": "LucideServerCog",
    "name": "LucideServerCog",
    "category": "Devices",
    "keywords": "lucide server cog"
  },
  {
    "id": "LucideServerCrash",
    "name": "LucideServerCrash",
    "category": "Devices",
    "keywords": "lucide server crash"
  },
  {
    "id": "LucideServerOff",
    "name": "LucideServerOff",
    "category": "Devices",
    "keywords": "lucide server off"
  },
  {
    "id": "LucideSettings",
    "name": "LucideSettings",
    "category": "System",
    "keywords": "lucide settings"
  },
  {
    "id": "LucideSettings2",
    "name": "LucideSettings2",
    "category": "System",
    "keywords": "lucide settings2"
  },
  {
    "id": "LucideShapes",
    "name": "LucideShapes",
    "category": "Design",
    "keywords": "lucide shapes"
  },
  {
    "id": "LucideShare",
    "name": "LucideShare",
    "category": "Symbols",
    "keywords": "lucide share"
  },
  {
    "id": "LucideShare2",
    "name": "LucideShare2",
    "category": "Symbols",
    "keywords": "lucide share2"
  },
  {
    "id": "LucideSheet",
    "name": "LucideSheet",
    "category": "General",
    "keywords": "lucide sheet"
  },
  {
    "id": "LucideShell",
    "name": "LucideShell",
    "category": "General",
    "keywords": "lucide shell"
  },
  {
    "id": "LucideShield",
    "name": "LucideShield",
    "category": "System",
    "keywords": "lucide shield"
  },
  {
    "id": "LucideShieldAlert",
    "name": "LucideShieldAlert",
    "category": "System",
    "keywords": "lucide shield alert"
  },
  {
    "id": "LucideShieldBan",
    "name": "LucideShieldBan",
    "category": "System",
    "keywords": "lucide shield ban"
  },
  {
    "id": "LucideShieldCheck",
    "name": "LucideShieldCheck",
    "category": "System",
    "keywords": "lucide shield check"
  },
  {
    "id": "LucideShieldClose",
    "name": "LucideShieldClose",
    "category": "System",
    "keywords": "lucide shield close"
  },
  {
    "id": "LucideShieldEllipsis",
    "name": "LucideShieldEllipsis",
    "category": "System",
    "keywords": "lucide shield ellipsis"
  },
  {
    "id": "LucideShieldHalf",
    "name": "LucideShieldHalf",
    "category": "System",
    "keywords": "lucide shield half"
  },
  {
    "id": "LucideShieldMinus",
    "name": "LucideShieldMinus",
    "category": "System",
    "keywords": "lucide shield minus"
  },
  {
    "id": "LucideShieldOff",
    "name": "LucideShieldOff",
    "category": "System",
    "keywords": "lucide shield off"
  },
  {
    "id": "LucideShieldPlus",
    "name": "LucideShieldPlus",
    "category": "System",
    "keywords": "lucide shield plus"
  },
  {
    "id": "LucideShieldQuestion",
    "name": "LucideShieldQuestion",
    "category": "System",
    "keywords": "lucide shield question"
  },
  {
    "id": "LucideShieldQuestionMark",
    "name": "LucideShieldQuestionMark",
    "category": "System",
    "keywords": "lucide shield question mark"
  },
  {
    "id": "LucideShieldUser",
    "name": "LucideShieldUser",
    "category": "System",
    "keywords": "lucide shield user"
  },
  {
    "id": "LucideShieldX",
    "name": "LucideShieldX",
    "category": "System",
    "keywords": "lucide shield x"
  },
  {
    "id": "LucideShip",
    "name": "LucideShip",
    "category": "General",
    "keywords": "lucide ship"
  },
  {
    "id": "LucideShipWheel",
    "name": "LucideShipWheel",
    "category": "General",
    "keywords": "lucide ship wheel"
  },
  {
    "id": "LucideShirt",
    "name": "LucideShirt",
    "category": "General",
    "keywords": "lucide shirt"
  },
  {
    "id": "LucideShoppingBag",
    "name": "LucideShoppingBag",
    "category": "General",
    "keywords": "lucide shopping bag"
  },
  {
    "id": "LucideShoppingBasket",
    "name": "LucideShoppingBasket",
    "category": "General",
    "keywords": "lucide shopping basket"
  },
  {
    "id": "LucideShoppingCart",
    "name": "LucideShoppingCart",
    "category": "Design",
    "keywords": "lucide shopping cart"
  },
  {
    "id": "LucideShovel",
    "name": "LucideShovel",
    "category": "General",
    "keywords": "lucide shovel"
  },
  {
    "id": "LucideShowerHead",
    "name": "LucideShowerHead",
    "category": "General",
    "keywords": "lucide shower head"
  },
  {
    "id": "LucideShredder",
    "name": "LucideShredder",
    "category": "General",
    "keywords": "lucide shredder"
  },
  {
    "id": "LucideShrimp",
    "name": "LucideShrimp",
    "category": "General",
    "keywords": "lucide shrimp"
  },
  {
    "id": "LucideShrink",
    "name": "LucideShrink",
    "category": "General",
    "keywords": "lucide shrink"
  },
  {
    "id": "LucideShrub",
    "name": "LucideShrub",
    "category": "General",
    "keywords": "lucide shrub"
  },
  {
    "id": "LucideShuffle",
    "name": "LucideShuffle",
    "category": "Navigation",
    "keywords": "lucide shuffle"
  },
  {
    "id": "LucideSidebar",
    "name": "LucideSidebar",
    "category": "General",
    "keywords": "lucide sidebar"
  },
  {
    "id": "LucideSidebarClose",
    "name": "LucideSidebarClose",
    "category": "General",
    "keywords": "lucide sidebar close"
  },
  {
    "id": "LucideSidebarOpen",
    "name": "LucideSidebarOpen",
    "category": "Design",
    "keywords": "lucide sidebar open"
  },
  {
    "id": "LucideSigma",
    "name": "LucideSigma",
    "category": "General",
    "keywords": "lucide sigma"
  },
  {
    "id": "LucideSigmaSquare",
    "name": "LucideSigmaSquare",
    "category": "General",
    "keywords": "lucide sigma square"
  },
  {
    "id": "LucideSignal",
    "name": "LucideSignal",
    "category": "General",
    "keywords": "lucide signal"
  },
  {
    "id": "LucideSignalHigh",
    "name": "LucideSignalHigh",
    "category": "General",
    "keywords": "lucide signal high"
  },
  {
    "id": "LucideSignalLow",
    "name": "LucideSignalLow",
    "category": "General",
    "keywords": "lucide signal low"
  },
  {
    "id": "LucideSignalMedium",
    "name": "LucideSignalMedium",
    "category": "General",
    "keywords": "lucide signal medium"
  },
  {
    "id": "LucideSignalZero",
    "name": "LucideSignalZero",
    "category": "General",
    "keywords": "lucide signal zero"
  },
  {
    "id": "LucideSignature",
    "name": "LucideSignature",
    "category": "General",
    "keywords": "lucide signature"
  },
  {
    "id": "LucideSignpost",
    "name": "LucideSignpost",
    "category": "General",
    "keywords": "lucide signpost"
  },
  {
    "id": "LucideSignpostBig",
    "name": "LucideSignpostBig",
    "category": "General",
    "keywords": "lucide signpost big"
  },
  {
    "id": "LucideSiren",
    "name": "LucideSiren",
    "category": "General",
    "keywords": "lucide siren"
  },
  {
    "id": "LucideSkipBack",
    "name": "LucideSkipBack",
    "category": "General",
    "keywords": "lucide skip back"
  },
  {
    "id": "LucideSkipForward",
    "name": "LucideSkipForward",
    "category": "General",
    "keywords": "lucide skip forward"
  },
  {
    "id": "LucideSkull",
    "name": "LucideSkull",
    "category": "General",
    "keywords": "lucide skull"
  },
  {
    "id": "LucideSlack",
    "name": "LucideSlack",
    "category": "General",
    "keywords": "lucide slack"
  },
  {
    "id": "LucideSlash",
    "name": "LucideSlash",
    "category": "General",
    "keywords": "lucide slash"
  },
  {
    "id": "LucideSlashSquare",
    "name": "LucideSlashSquare",
    "category": "General",
    "keywords": "lucide slash square"
  },
  {
    "id": "LucideSlice",
    "name": "LucideSlice",
    "category": "General",
    "keywords": "lucide slice"
  },
  {
    "id": "LucideSliders",
    "name": "LucideSliders",
    "category": "System",
    "keywords": "lucide sliders"
  },
  {
    "id": "LucideSlidersHorizontal",
    "name": "LucideSlidersHorizontal",
    "category": "System",
    "keywords": "lucide sliders horizontal"
  },
  {
    "id": "LucideSlidersVertical",
    "name": "LucideSlidersVertical",
    "category": "System",
    "keywords": "lucide sliders vertical"
  },
  {
    "id": "LucideSmartphone",
    "name": "LucideSmartphone",
    "category": "Design",
    "keywords": "lucide smartphone"
  },
  {
    "id": "LucideSmartphoneCharging",
    "name": "LucideSmartphoneCharging",
    "category": "Design",
    "keywords": "lucide smartphone charging"
  },
  {
    "id": "LucideSmartphoneNfc",
    "name": "LucideSmartphoneNfc",
    "category": "Design",
    "keywords": "lucide smartphone nfc"
  },
  {
    "id": "LucideSmile",
    "name": "LucideSmile",
    "category": "General",
    "keywords": "lucide smile"
  },
  {
    "id": "LucideSmilePlus",
    "name": "LucideSmilePlus",
    "category": "Symbols",
    "keywords": "lucide smile plus"
  },
  {
    "id": "LucideSnail",
    "name": "LucideSnail",
    "category": "General",
    "keywords": "lucide snail"
  },
  {
    "id": "LucideSnowflake",
    "name": "LucideSnowflake",
    "category": "General",
    "keywords": "lucide snowflake"
  },
  {
    "id": "LucideSoapDispenserDroplet",
    "name": "LucideSoapDispenserDroplet",
    "category": "Design",
    "keywords": "lucide soap dispenser droplet"
  },
  {
    "id": "LucideSofa",
    "name": "LucideSofa",
    "category": "General",
    "keywords": "lucide sofa"
  },
  {
    "id": "LucideSortAsc",
    "name": "LucideSortAsc",
    "category": "General",
    "keywords": "lucide sort asc"
  },
  {
    "id": "LucideSortDesc",
    "name": "LucideSortDesc",
    "category": "General",
    "keywords": "lucide sort desc"
  },
  {
    "id": "LucideSoup",
    "name": "LucideSoup",
    "category": "General",
    "keywords": "lucide soup"
  },
  {
    "id": "LucideSpace",
    "name": "LucideSpace",
    "category": "General",
    "keywords": "lucide space"
  },
  {
    "id": "LucideSpade",
    "name": "LucideSpade",
    "category": "General",
    "keywords": "lucide spade"
  },
  {
    "id": "LucideSparkle",
    "name": "LucideSparkle",
    "category": "Design",
    "keywords": "lucide sparkle"
  },
  {
    "id": "LucideSparkles",
    "name": "LucideSparkles",
    "category": "Design",
    "keywords": "lucide sparkles"
  },
  {
    "id": "LucideSpeaker",
    "name": "LucideSpeaker",
    "category": "Media",
    "keywords": "lucide speaker"
  },
  {
    "id": "LucideSpeech",
    "name": "LucideSpeech",
    "category": "General",
    "keywords": "lucide speech"
  },
  {
    "id": "LucideSpellCheck",
    "name": "LucideSpellCheck",
    "category": "Symbols",
    "keywords": "lucide spell check"
  },
  {
    "id": "LucideSpellCheck2",
    "name": "LucideSpellCheck2",
    "category": "Symbols",
    "keywords": "lucide spell check2"
  },
  {
    "id": "LucideSpline",
    "name": "LucideSpline",
    "category": "General",
    "keywords": "lucide spline"
  },
  {
    "id": "LucideSplinePointer",
    "name": "LucideSplinePointer",
    "category": "General",
    "keywords": "lucide spline pointer"
  },
  {
    "id": "LucideSplit",
    "name": "LucideSplit",
    "category": "General",
    "keywords": "lucide split"
  },
  {
    "id": "LucideSplitSquareHorizontal",
    "name": "LucideSplitSquareHorizontal",
    "category": "General",
    "keywords": "lucide split square horizontal"
  },
  {
    "id": "LucideSplitSquareVertical",
    "name": "LucideSplitSquareVertical",
    "category": "General",
    "keywords": "lucide split square vertical"
  },
  {
    "id": "LucideSpool",
    "name": "LucideSpool",
    "category": "General",
    "keywords": "lucide spool"
  },
  {
    "id": "LucideSpotlight",
    "name": "LucideSpotlight",
    "category": "General",
    "keywords": "lucide spotlight"
  },
  {
    "id": "LucideSprayCan",
    "name": "LucideSprayCan",
    "category": "General",
    "keywords": "lucide spray can"
  },
  {
    "id": "LucideSprout",
    "name": "LucideSprout",
    "category": "General",
    "keywords": "lucide sprout"
  },
  {
    "id": "LucideSquare",
    "name": "LucideSquare",
    "category": "General",
    "keywords": "lucide square"
  },
  {
    "id": "LucideSquareActivity",
    "name": "LucideSquareActivity",
    "category": "General",
    "keywords": "lucide square activity"
  },
  {
    "id": "LucideSquareArrowDown",
    "name": "LucideSquareArrowDown",
    "category": "Navigation",
    "keywords": "lucide square arrow down"
  },
  {
    "id": "LucideSquareArrowDownLeft",
    "name": "LucideSquareArrowDownLeft",
    "category": "Navigation",
    "keywords": "lucide square arrow down left"
  },
  {
    "id": "LucideSquareArrowDownRight",
    "name": "LucideSquareArrowDownRight",
    "category": "Navigation",
    "keywords": "lucide square arrow down right"
  },
  {
    "id": "LucideSquareArrowLeft",
    "name": "LucideSquareArrowLeft",
    "category": "Navigation",
    "keywords": "lucide square arrow left"
  },
  {
    "id": "LucideSquareArrowOutDownLeft",
    "name": "LucideSquareArrowOutDownLeft",
    "category": "Navigation",
    "keywords": "lucide square arrow out down left"
  },
  {
    "id": "LucideSquareArrowOutDownRight",
    "name": "LucideSquareArrowOutDownRight",
    "category": "Navigation",
    "keywords": "lucide square arrow out down right"
  },
  {
    "id": "LucideSquareArrowOutUpLeft",
    "name": "LucideSquareArrowOutUpLeft",
    "category": "Navigation",
    "keywords": "lucide square arrow out up left"
  },
  {
    "id": "LucideSquareArrowOutUpRight",
    "name": "LucideSquareArrowOutUpRight",
    "category": "Navigation",
    "keywords": "lucide square arrow out up right"
  },
  {
    "id": "LucideSquareArrowRight",
    "name": "LucideSquareArrowRight",
    "category": "Navigation",
    "keywords": "lucide square arrow right"
  },
  {
    "id": "LucideSquareArrowUp",
    "name": "LucideSquareArrowUp",
    "category": "Navigation",
    "keywords": "lucide square arrow up"
  },
  {
    "id": "LucideSquareArrowUpLeft",
    "name": "LucideSquareArrowUpLeft",
    "category": "Navigation",
    "keywords": "lucide square arrow up left"
  },
  {
    "id": "LucideSquareArrowUpRight",
    "name": "LucideSquareArrowUpRight",
    "category": "Navigation",
    "keywords": "lucide square arrow up right"
  },
  {
    "id": "LucideSquareAsterisk",
    "name": "LucideSquareAsterisk",
    "category": "General",
    "keywords": "lucide square asterisk"
  },
  {
    "id": "LucideSquareBottomDashedScissors",
    "name": "LucideSquareBottomDashedScissors",
    "category": "Design",
    "keywords": "lucide square bottom dashed scissors"
  },
  {
    "id": "LucideSquareChartGantt",
    "name": "LucideSquareChartGantt",
    "category": "Design",
    "keywords": "lucide square chart gantt"
  },
  {
    "id": "LucideSquareCheck",
    "name": "LucideSquareCheck",
    "category": "Symbols",
    "keywords": "lucide square check"
  },
  {
    "id": "LucideSquareCheckBig",
    "name": "LucideSquareCheckBig",
    "category": "Symbols",
    "keywords": "lucide square check big"
  },
  {
    "id": "LucideSquareChevronDown",
    "name": "LucideSquareChevronDown",
    "category": "Navigation",
    "keywords": "lucide square chevron down"
  },
  {
    "id": "LucideSquareChevronLeft",
    "name": "LucideSquareChevronLeft",
    "category": "Navigation",
    "keywords": "lucide square chevron left"
  },
  {
    "id": "LucideSquareChevronRight",
    "name": "LucideSquareChevronRight",
    "category": "Navigation",
    "keywords": "lucide square chevron right"
  },
  {
    "id": "LucideSquareChevronUp",
    "name": "LucideSquareChevronUp",
    "category": "Navigation",
    "keywords": "lucide square chevron up"
  },
  {
    "id": "LucideSquareCode",
    "name": "LucideSquareCode",
    "category": "System",
    "keywords": "lucide square code"
  },
  {
    "id": "LucideSquareDashed",
    "name": "LucideSquareDashed",
    "category": "General",
    "keywords": "lucide square dashed"
  },
  {
    "id": "LucideSquareDashedBottom",
    "name": "LucideSquareDashedBottom",
    "category": "General",
    "keywords": "lucide square dashed bottom"
  },
  {
    "id": "LucideSquareDashedBottomCode",
    "name": "LucideSquareDashedBottomCode",
    "category": "System",
    "keywords": "lucide square dashed bottom code"
  },
  {
    "id": "LucideSquareDashedKanban",
    "name": "LucideSquareDashedKanban",
    "category": "General",
    "keywords": "lucide square dashed kanban"
  },
  {
    "id": "LucideSquareDashedMousePointer",
    "name": "LucideSquareDashedMousePointer",
    "category": "Devices",
    "keywords": "lucide square dashed mouse pointer"
  },
  {
    "id": "LucideSquareDashedTopSolid",
    "name": "LucideSquareDashedTopSolid",
    "category": "General",
    "keywords": "lucide square dashed top solid"
  },
  {
    "id": "LucideSquareDivide",
    "name": "LucideSquareDivide",
    "category": "General",
    "keywords": "lucide square divide"
  },
  {
    "id": "LucideSquareDot",
    "name": "LucideSquareDot",
    "category": "Navigation",
    "keywords": "lucide square dot"
  },
  {
    "id": "LucideSquareEqual",
    "name": "LucideSquareEqual",
    "category": "General",
    "keywords": "lucide square equal"
  },
  {
    "id": "LucideSquareFunction",
    "name": "LucideSquareFunction",
    "category": "General",
    "keywords": "lucide square function"
  },
  {
    "id": "LucideSquareGanttChart",
    "name": "LucideSquareGanttChart",
    "category": "Design",
    "keywords": "lucide square gantt chart"
  },
  {
    "id": "LucideSquareKanban",
    "name": "LucideSquareKanban",
    "category": "General",
    "keywords": "lucide square kanban"
  },
  {
    "id": "LucideSquareLibrary",
    "name": "LucideSquareLibrary",
    "category": "General",
    "keywords": "lucide square library"
  },
  {
    "id": "LucideSquareM",
    "name": "LucideSquareM",
    "category": "General",
    "keywords": "lucide square m"
  },
  {
    "id": "LucideSquareMenu",
    "name": "LucideSquareMenu",
    "category": "General",
    "keywords": "lucide square menu"
  },
  {
    "id": "LucideSquareMinus",
    "name": "LucideSquareMinus",
    "category": "Symbols",
    "keywords": "lucide square minus"
  },
  {
    "id": "LucideSquareMousePointer",
    "name": "LucideSquareMousePointer",
    "category": "Devices",
    "keywords": "lucide square mouse pointer"
  },
  {
    "id": "LucideSquareParking",
    "name": "LucideSquareParking",
    "category": "General",
    "keywords": "lucide square parking"
  },
  {
    "id": "LucideSquareParkingOff",
    "name": "LucideSquareParkingOff",
    "category": "General",
    "keywords": "lucide square parking off"
  },
  {
    "id": "LucideSquarePause",
    "name": "LucideSquarePause",
    "category": "Media",
    "keywords": "lucide square pause"
  },
  {
    "id": "LucideSquarePen",
    "name": "LucideSquarePen",
    "category": "Design",
    "keywords": "lucide square pen"
  },
  {
    "id": "LucideSquarePercent",
    "name": "LucideSquarePercent",
    "category": "General",
    "keywords": "lucide square percent"
  },
  {
    "id": "LucideSquarePi",
    "name": "LucideSquarePi",
    "category": "General",
    "keywords": "lucide square pi"
  },
  {
    "id": "LucideSquarePilcrow",
    "name": "LucideSquarePilcrow",
    "category": "General",
    "keywords": "lucide square pilcrow"
  },
  {
    "id": "LucideSquarePlay",
    "name": "LucideSquarePlay",
    "category": "Media",
    "keywords": "lucide square play"
  },
  {
    "id": "LucideSquarePlus",
    "name": "LucideSquarePlus",
    "category": "Symbols",
    "keywords": "lucide square plus"
  },
  {
    "id": "LucideSquarePower",
    "name": "LucideSquarePower",
    "category": "Devices",
    "keywords": "lucide square power"
  },
  {
    "id": "LucideSquareRadical",
    "name": "LucideSquareRadical",
    "category": "General",
    "keywords": "lucide square radical"
  },
  {
    "id": "LucideSquareRoundCorner",
    "name": "LucideSquareRoundCorner",
    "category": "Navigation",
    "keywords": "lucide square round corner"
  },
  {
    "id": "LucideSquareScissors",
    "name": "LucideSquareScissors",
    "category": "Design",
    "keywords": "lucide square scissors"
  },
  {
    "id": "LucideSquareSigma",
    "name": "LucideSquareSigma",
    "category": "General",
    "keywords": "lucide square sigma"
  },
  {
    "id": "LucideSquareSlash",
    "name": "LucideSquareSlash",
    "category": "General",
    "keywords": "lucide square slash"
  },
  {
    "id": "LucideSquareSplitHorizontal",
    "name": "LucideSquareSplitHorizontal",
    "category": "General",
    "keywords": "lucide square split horizontal"
  },
  {
    "id": "LucideSquareSplitVertical",
    "name": "LucideSquareSplitVertical",
    "category": "Media",
    "keywords": "lucide square split vertical"
  },
  {
    "id": "LucideSquareSquare",
    "name": "LucideSquareSquare",
    "category": "General",
    "keywords": "lucide square square"
  },
  {
    "id": "LucideSquareStack",
    "name": "LucideSquareStack",
    "category": "General",
    "keywords": "lucide square stack"
  },
  {
    "id": "LucideSquareStar",
    "name": "LucideSquareStar",
    "category": "Symbols",
    "keywords": "lucide square star"
  },
  {
    "id": "LucideSquareStop",
    "name": "LucideSquareStop",
    "category": "General",
    "keywords": "lucide square stop"
  },
  {
    "id": "LucideSquareTerminal",
    "name": "LucideSquareTerminal",
    "category": "System",
    "keywords": "lucide square terminal"
  },
  {
    "id": "LucideSquareUser",
    "name": "LucideSquareUser",
    "category": "Symbols",
    "keywords": "lucide square user"
  },
  {
    "id": "LucideSquareUserRound",
    "name": "LucideSquareUserRound",
    "category": "Symbols",
    "keywords": "lucide square user round"
  },
  {
    "id": "LucideSquareX",
    "name": "LucideSquareX",
    "category": "General",
    "keywords": "lucide square x"
  },
  {
    "id": "LucideSquaresExclude",
    "name": "LucideSquaresExclude",
    "category": "General",
    "keywords": "lucide squares exclude"
  },
  {
    "id": "LucideSquaresIntersect",
    "name": "LucideSquaresIntersect",
    "category": "General",
    "keywords": "lucide squares intersect"
  },
  {
    "id": "LucideSquaresSubtract",
    "name": "LucideSquaresSubtract",
    "category": "General",
    "keywords": "lucide squares subtract"
  },
  {
    "id": "LucideSquaresUnite",
    "name": "LucideSquaresUnite",
    "category": "Symbols",
    "keywords": "lucide squares unite"
  },
  {
    "id": "LucideSquircle",
    "name": "LucideSquircle",
    "category": "General",
    "keywords": "lucide squircle"
  },
  {
    "id": "LucideSquircleDashed",
    "name": "LucideSquircleDashed",
    "category": "General",
    "keywords": "lucide squircle dashed"
  },
  {
    "id": "LucideSquirrel",
    "name": "LucideSquirrel",
    "category": "General",
    "keywords": "lucide squirrel"
  },
  {
    "id": "LucideStamp",
    "name": "LucideStamp",
    "category": "Design",
    "keywords": "lucide stamp"
  },
  {
    "id": "LucideStar",
    "name": "LucideStar",
    "category": "Symbols",
    "keywords": "lucide star"
  },
  {
    "id": "LucideStarHalf",
    "name": "LucideStarHalf",
    "category": "Symbols",
    "keywords": "lucide star half"
  },
  {
    "id": "LucideStarOff",
    "name": "LucideStarOff",
    "category": "Symbols",
    "keywords": "lucide star off"
  },
  {
    "id": "LucideStars",
    "name": "LucideStars",
    "category": "Symbols",
    "keywords": "lucide stars"
  },
  {
    "id": "LucideStepBack",
    "name": "LucideStepBack",
    "category": "General",
    "keywords": "lucide step back"
  },
  {
    "id": "LucideStepForward",
    "name": "LucideStepForward",
    "category": "General",
    "keywords": "lucide step forward"
  },
  {
    "id": "LucideStethoscope",
    "name": "LucideStethoscope",
    "category": "General",
    "keywords": "lucide stethoscope"
  },
  {
    "id": "LucideSticker",
    "name": "LucideSticker",
    "category": "General",
    "keywords": "lucide sticker"
  },
  {
    "id": "LucideStickyNote",
    "name": "LucideStickyNote",
    "category": "General",
    "keywords": "lucide sticky note"
  },
  {
    "id": "LucideStopCircle",
    "name": "LucideStopCircle",
    "category": "General",
    "keywords": "lucide stop circle"
  },
  {
    "id": "LucideStore",
    "name": "LucideStore",
    "category": "General",
    "keywords": "lucide store"
  },
  {
    "id": "LucideStretchHorizontal",
    "name": "LucideStretchHorizontal",
    "category": "General",
    "keywords": "lucide stretch horizontal"
  },
  {
    "id": "LucideStretchVertical",
    "name": "LucideStretchVertical",
    "category": "General",
    "keywords": "lucide stretch vertical"
  },
  {
    "id": "LucideStrikethrough",
    "name": "LucideStrikethrough",
    "category": "General",
    "keywords": "lucide strikethrough"
  },
  {
    "id": "LucideSubscript",
    "name": "LucideSubscript",
    "category": "General",
    "keywords": "lucide subscript"
  },
  {
    "id": "LucideSubtitles",
    "name": "LucideSubtitles",
    "category": "General",
    "keywords": "lucide subtitles"
  },
  {
    "id": "LucideSun",
    "name": "LucideSun",
    "category": "Symbols",
    "keywords": "lucide sun"
  },
  {
    "id": "LucideSunDim",
    "name": "LucideSunDim",
    "category": "Symbols",
    "keywords": "lucide sun dim"
  },
  {
    "id": "LucideSunMedium",
    "name": "LucideSunMedium",
    "category": "Symbols",
    "keywords": "lucide sun medium"
  },
  {
    "id": "LucideSunMoon",
    "name": "LucideSunMoon",
    "category": "Symbols",
    "keywords": "lucide sun moon"
  },
  {
    "id": "LucideSunSnow",
    "name": "LucideSunSnow",
    "category": "Symbols",
    "keywords": "lucide sun snow"
  },
  {
    "id": "LucideSunrise",
    "name": "LucideSunrise",
    "category": "Symbols",
    "keywords": "lucide sunrise"
  },
  {
    "id": "LucideSunset",
    "name": "LucideSunset",
    "category": "Symbols",
    "keywords": "lucide sunset"
  },
  {
    "id": "LucideSuperscript",
    "name": "LucideSuperscript",
    "category": "General",
    "keywords": "lucide superscript"
  },
  {
    "id": "LucideSwatchBook",
    "name": "LucideSwatchBook",
    "category": "Devices",
    "keywords": "lucide swatch book"
  },
  {
    "id": "LucideSwissFranc",
    "name": "LucideSwissFranc",
    "category": "General",
    "keywords": "lucide swiss franc"
  },
  {
    "id": "LucideSwitchCamera",
    "name": "LucideSwitchCamera",
    "category": "System",
    "keywords": "lucide switch camera"
  },
  {
    "id": "LucideSword",
    "name": "LucideSword",
    "category": "General",
    "keywords": "lucide sword"
  },
  {
    "id": "LucideSwords",
    "name": "LucideSwords",
    "category": "General",
    "keywords": "lucide swords"
  },
  {
    "id": "LucideSyringe",
    "name": "LucideSyringe",
    "category": "General",
    "keywords": "lucide syringe"
  },
  {
    "id": "LucideTable",
    "name": "LucideTable",
    "category": "General",
    "keywords": "lucide table"
  },
  {
    "id": "LucideTable2",
    "name": "LucideTable2",
    "category": "General",
    "keywords": "lucide table2"
  },
  {
    "id": "LucideTableCellsMerge",
    "name": "LucideTableCellsMerge",
    "category": "General",
    "keywords": "lucide table cells merge"
  },
  {
    "id": "LucideTableCellsSplit",
    "name": "LucideTableCellsSplit",
    "category": "General",
    "keywords": "lucide table cells split"
  },
  {
    "id": "LucideTableColumnsSplit",
    "name": "LucideTableColumnsSplit",
    "category": "General",
    "keywords": "lucide table columns split"
  },
  {
    "id": "LucideTableConfig",
    "name": "LucideTableConfig",
    "category": "General",
    "keywords": "lucide table config"
  },
  {
    "id": "LucideTableOfContents",
    "name": "LucideTableOfContents",
    "category": "General",
    "keywords": "lucide table of contents"
  },
  {
    "id": "LucideTableProperties",
    "name": "LucideTableProperties",
    "category": "General",
    "keywords": "lucide table properties"
  },
  {
    "id": "LucideTableRowsSplit",
    "name": "LucideTableRowsSplit",
    "category": "General",
    "keywords": "lucide table rows split"
  },
  {
    "id": "LucideTablet",
    "name": "LucideTablet",
    "category": "Devices",
    "keywords": "lucide tablet"
  },
  {
    "id": "LucideTabletSmartphone",
    "name": "LucideTabletSmartphone",
    "category": "Design",
    "keywords": "lucide tablet smartphone"
  },
  {
    "id": "LucideTablets",
    "name": "LucideTablets",
    "category": "Devices",
    "keywords": "lucide tablets"
  },
  {
    "id": "LucideTag",
    "name": "LucideTag",
    "category": "Symbols",
    "keywords": "lucide tag"
  },
  {
    "id": "LucideTags",
    "name": "LucideTags",
    "category": "Symbols",
    "keywords": "lucide tags"
  },
  {
    "id": "LucideTally1",
    "name": "LucideTally1",
    "category": "General",
    "keywords": "lucide tally1"
  },
  {
    "id": "LucideTally2",
    "name": "LucideTally2",
    "category": "General",
    "keywords": "lucide tally2"
  },
  {
    "id": "LucideTally3",
    "name": "LucideTally3",
    "category": "General",
    "keywords": "lucide tally3"
  },
  {
    "id": "LucideTally4",
    "name": "LucideTally4",
    "category": "General",
    "keywords": "lucide tally4"
  },
  {
    "id": "LucideTally5",
    "name": "LucideTally5",
    "category": "General",
    "keywords": "lucide tally5"
  },
  {
    "id": "LucideTangent",
    "name": "LucideTangent",
    "category": "General",
    "keywords": "lucide tangent"
  },
  {
    "id": "LucideTarget",
    "name": "LucideTarget",
    "category": "General",
    "keywords": "lucide target"
  },
  {
    "id": "LucideTelescope",
    "name": "LucideTelescope",
    "category": "General",
    "keywords": "lucide telescope"
  },
  {
    "id": "LucideTent",
    "name": "LucideTent",
    "category": "General",
    "keywords": "lucide tent"
  },
  {
    "id": "LucideTentTree",
    "name": "LucideTentTree",
    "category": "General",
    "keywords": "lucide tent tree"
  },
  {
    "id": "LucideTerminal",
    "name": "LucideTerminal",
    "category": "System",
    "keywords": "lucide terminal"
  },
  {
    "id": "LucideTerminalSquare",
    "name": "LucideTerminalSquare",
    "category": "System",
    "keywords": "lucide terminal square"
  },
  {
    "id": "LucideTestTube",
    "name": "LucideTestTube",
    "category": "General",
    "keywords": "lucide test tube"
  },
  {
    "id": "LucideTestTube2",
    "name": "LucideTestTube2",
    "category": "General",
    "keywords": "lucide test tube2"
  },
  {
    "id": "LucideTestTubeDiagonal",
    "name": "LucideTestTubeDiagonal",
    "category": "General",
    "keywords": "lucide test tube diagonal"
  },
  {
    "id": "LucideTestTubes",
    "name": "LucideTestTubes",
    "category": "General",
    "keywords": "lucide test tubes"
  },
  {
    "id": "LucideText",
    "name": "LucideText",
    "category": "General",
    "keywords": "lucide text"
  },
  {
    "id": "LucideTextAlignCenter",
    "name": "LucideTextAlignCenter",
    "category": "General",
    "keywords": "lucide text align center"
  },
  {
    "id": "LucideTextAlignEnd",
    "name": "LucideTextAlignEnd",
    "category": "General",
    "keywords": "lucide text align end"
  },
  {
    "id": "LucideTextAlignJustify",
    "name": "LucideTextAlignJustify",
    "category": "General",
    "keywords": "lucide text align justify"
  },
  {
    "id": "LucideTextAlignStart",
    "name": "LucideTextAlignStart",
    "category": "Design",
    "keywords": "lucide text align start"
  },
  {
    "id": "LucideTextCursor",
    "name": "LucideTextCursor",
    "category": "General",
    "keywords": "lucide text cursor"
  },
  {
    "id": "LucideTextCursorInput",
    "name": "LucideTextCursorInput",
    "category": "General",
    "keywords": "lucide text cursor input"
  },
  {
    "id": "LucideTextInitial",
    "name": "LucideTextInitial",
    "category": "General",
    "keywords": "lucide text initial"
  },
  {
    "id": "LucideTextQuote",
    "name": "LucideTextQuote",
    "category": "General",
    "keywords": "lucide text quote"
  },
  {
    "id": "LucideTextSearch",
    "name": "LucideTextSearch",
    "category": "Symbols",
    "keywords": "lucide text search"
  },
  {
    "id": "LucideTextSelect",
    "name": "LucideTextSelect",
    "category": "General",
    "keywords": "lucide text select"
  },
  {
    "id": "LucideTextSelection",
    "name": "LucideTextSelection",
    "category": "General",
    "keywords": "lucide text selection"
  },
  {
    "id": "LucideTextWrap",
    "name": "LucideTextWrap",
    "category": "General",
    "keywords": "lucide text wrap"
  },
  {
    "id": "LucideTheater",
    "name": "LucideTheater",
    "category": "General",
    "keywords": "lucide theater"
  },
  {
    "id": "LucideThermometer",
    "name": "LucideThermometer",
    "category": "General",
    "keywords": "lucide thermometer"
  },
  {
    "id": "LucideThermometerSnowflake",
    "name": "LucideThermometerSnowflake",
    "category": "General",
    "keywords": "lucide thermometer snowflake"
  },
  {
    "id": "LucideThermometerSun",
    "name": "LucideThermometerSun",
    "category": "Symbols",
    "keywords": "lucide thermometer sun"
  },
  {
    "id": "LucideThumbsDown",
    "name": "LucideThumbsDown",
    "category": "General",
    "keywords": "lucide thumbs down"
  },
  {
    "id": "LucideThumbsUp",
    "name": "LucideThumbsUp",
    "category": "General",
    "keywords": "lucide thumbs up"
  },
  {
    "id": "LucideTicket",
    "name": "LucideTicket",
    "category": "General",
    "keywords": "lucide ticket"
  },
  {
    "id": "LucideTicketCheck",
    "name": "LucideTicketCheck",
    "category": "Symbols",
    "keywords": "lucide ticket check"
  },
  {
    "id": "LucideTicketMinus",
    "name": "LucideTicketMinus",
    "category": "Symbols",
    "keywords": "lucide ticket minus"
  },
  {
    "id": "LucideTicketPercent",
    "name": "LucideTicketPercent",
    "category": "General",
    "keywords": "lucide ticket percent"
  },
  {
    "id": "LucideTicketPlus",
    "name": "LucideTicketPlus",
    "category": "Symbols",
    "keywords": "lucide ticket plus"
  },
  {
    "id": "LucideTicketSlash",
    "name": "LucideTicketSlash",
    "category": "General",
    "keywords": "lucide ticket slash"
  },
  {
    "id": "LucideTicketX",
    "name": "LucideTicketX",
    "category": "General",
    "keywords": "lucide ticket x"
  },
  {
    "id": "LucideTickets",
    "name": "LucideTickets",
    "category": "General",
    "keywords": "lucide tickets"
  },
  {
    "id": "LucideTicketsPlane",
    "name": "LucideTicketsPlane",
    "category": "General",
    "keywords": "lucide tickets plane"
  },
  {
    "id": "LucideTimer",
    "name": "LucideTimer",
    "category": "General",
    "keywords": "lucide timer"
  },
  {
    "id": "LucideTimerOff",
    "name": "LucideTimerOff",
    "category": "General",
    "keywords": "lucide timer off"
  },
  {
    "id": "LucideTimerReset",
    "name": "LucideTimerReset",
    "category": "General",
    "keywords": "lucide timer reset"
  },
  {
    "id": "LucideToggleLeft",
    "name": "LucideToggleLeft",
    "category": "System",
    "keywords": "lucide toggle left"
  },
  {
    "id": "LucideToggleRight",
    "name": "LucideToggleRight",
    "category": "System",
    "keywords": "lucide toggle right"
  },
  {
    "id": "LucideToilet",
    "name": "LucideToilet",
    "category": "General",
    "keywords": "lucide toilet"
  },
  {
    "id": "LucideToolCase",
    "name": "LucideToolCase",
    "category": "System",
    "keywords": "lucide tool case"
  },
  {
    "id": "LucideTornado",
    "name": "LucideTornado",
    "category": "General",
    "keywords": "lucide tornado"
  },
  {
    "id": "LucideTorus",
    "name": "LucideTorus",
    "category": "General",
    "keywords": "lucide torus"
  },
  {
    "id": "LucideTouchpad",
    "name": "LucideTouchpad",
    "category": "General",
    "keywords": "lucide touchpad"
  },
  {
    "id": "LucideTouchpadOff",
    "name": "LucideTouchpadOff",
    "category": "General",
    "keywords": "lucide touchpad off"
  },
  {
    "id": "LucideTowerControl",
    "name": "LucideTowerControl",
    "category": "General",
    "keywords": "lucide tower control"
  },
  {
    "id": "LucideToyBrick",
    "name": "LucideToyBrick",
    "category": "General",
    "keywords": "lucide toy brick"
  },
  {
    "id": "LucideTractor",
    "name": "LucideTractor",
    "category": "General",
    "keywords": "lucide tractor"
  },
  {
    "id": "LucideTrafficCone",
    "name": "LucideTrafficCone",
    "category": "General",
    "keywords": "lucide traffic cone"
  },
  {
    "id": "LucideTrain",
    "name": "LucideTrain",
    "category": "General",
    "keywords": "lucide train"
  },
  {
    "id": "LucideTrainFront",
    "name": "LucideTrainFront",
    "category": "General",
    "keywords": "lucide train front"
  },
  {
    "id": "LucideTrainFrontTunnel",
    "name": "LucideTrainFrontTunnel",
    "category": "General",
    "keywords": "lucide train front tunnel"
  },
  {
    "id": "LucideTrainTrack",
    "name": "LucideTrainTrack",
    "category": "General",
    "keywords": "lucide train track"
  },
  {
    "id": "LucideTramFront",
    "name": "LucideTramFront",
    "category": "General",
    "keywords": "lucide tram front"
  },
  {
    "id": "LucideTransgender",
    "name": "LucideTransgender",
    "category": "General",
    "keywords": "lucide transgender"
  },
  {
    "id": "LucideTrash",
    "name": "LucideTrash",
    "category": "General",
    "keywords": "lucide trash"
  },
  {
    "id": "LucideTrash2",
    "name": "LucideTrash2",
    "category": "General",
    "keywords": "lucide trash2"
  },
  {
    "id": "LucideTreeDeciduous",
    "name": "LucideTreeDeciduous",
    "category": "General",
    "keywords": "lucide tree deciduous"
  },
  {
    "id": "LucideTreePalm",
    "name": "LucideTreePalm",
    "category": "General",
    "keywords": "lucide tree palm"
  },
  {
    "id": "LucideTreePine",
    "name": "LucideTreePine",
    "category": "General",
    "keywords": "lucide tree pine"
  },
  {
    "id": "LucideTrees",
    "name": "LucideTrees",
    "category": "General",
    "keywords": "lucide trees"
  },
  {
    "id": "LucideTrello",
    "name": "LucideTrello",
    "category": "General",
    "keywords": "lucide trello"
  },
  {
    "id": "LucideTrendingDown",
    "name": "LucideTrendingDown",
    "category": "General",
    "keywords": "lucide trending down"
  },
  {
    "id": "LucideTrendingUp",
    "name": "LucideTrendingUp",
    "category": "General",
    "keywords": "lucide trending up"
  },
  {
    "id": "LucideTrendingUpDown",
    "name": "LucideTrendingUpDown",
    "category": "General",
    "keywords": "lucide trending up down"
  },
  {
    "id": "LucideTriangle",
    "name": "LucideTriangle",
    "category": "General",
    "keywords": "lucide triangle"
  },
  {
    "id": "LucideTriangleAlert",
    "name": "LucideTriangleAlert",
    "category": "Symbols",
    "keywords": "lucide triangle alert"
  },
  {
    "id": "LucideTriangleDashed",
    "name": "LucideTriangleDashed",
    "category": "General",
    "keywords": "lucide triangle dashed"
  },
  {
    "id": "LucideTriangleRight",
    "name": "LucideTriangleRight",
    "category": "General",
    "keywords": "lucide triangle right"
  },
  {
    "id": "LucideTrophy",
    "name": "LucideTrophy",
    "category": "General",
    "keywords": "lucide trophy"
  },
  {
    "id": "LucideTruck",
    "name": "LucideTruck",
    "category": "General",
    "keywords": "lucide truck"
  },
  {
    "id": "LucideTruckElectric",
    "name": "LucideTruckElectric",
    "category": "General",
    "keywords": "lucide truck electric"
  },
  {
    "id": "LucideTurkishLira",
    "name": "LucideTurkishLira",
    "category": "General",
    "keywords": "lucide turkish lira"
  },
  {
    "id": "LucideTurntable",
    "name": "LucideTurntable",
    "category": "General",
    "keywords": "lucide turntable"
  },
  {
    "id": "LucideTurtle",
    "name": "LucideTurtle",
    "category": "General",
    "keywords": "lucide turtle"
  },
  {
    "id": "LucideTv",
    "name": "LucideTv",
    "category": "Media",
    "keywords": "lucide tv"
  },
  {
    "id": "LucideTv2",
    "name": "LucideTv2",
    "category": "Media",
    "keywords": "lucide tv2"
  },
  {
    "id": "LucideTvMinimal",
    "name": "LucideTvMinimal",
    "category": "Media",
    "keywords": "lucide tv minimal"
  },
  {
    "id": "LucideTvMinimalPlay",
    "name": "LucideTvMinimalPlay",
    "category": "Media",
    "keywords": "lucide tv minimal play"
  },
  {
    "id": "LucideTwitch",
    "name": "LucideTwitch",
    "category": "General",
    "keywords": "lucide twitch"
  },
  {
    "id": "LucideTwitter",
    "name": "LucideTwitter",
    "category": "General",
    "keywords": "lucide twitter"
  },
  {
    "id": "LucideType",
    "name": "LucideType",
    "category": "General",
    "keywords": "lucide type"
  },
  {
    "id": "LucideTypeOutline",
    "name": "LucideTypeOutline",
    "category": "General",
    "keywords": "lucide type outline"
  },
  {
    "id": "LucideUmbrella",
    "name": "LucideUmbrella",
    "category": "General",
    "keywords": "lucide umbrella"
  },
  {
    "id": "LucideUmbrellaOff",
    "name": "LucideUmbrellaOff",
    "category": "General",
    "keywords": "lucide umbrella off"
  },
  {
    "id": "LucideUnderline",
    "name": "LucideUnderline",
    "category": "General",
    "keywords": "lucide underline"
  },
  {
    "id": "LucideUndo",
    "name": "LucideUndo",
    "category": "Navigation",
    "keywords": "lucide undo"
  },
  {
    "id": "LucideUndo2",
    "name": "LucideUndo2",
    "category": "Navigation",
    "keywords": "lucide undo2"
  },
  {
    "id": "LucideUndoDot",
    "name": "LucideUndoDot",
    "category": "Navigation",
    "keywords": "lucide undo dot"
  },
  {
    "id": "LucideUnfoldHorizontal",
    "name": "LucideUnfoldHorizontal",
    "category": "General",
    "keywords": "lucide unfold horizontal"
  },
  {
    "id": "LucideUnfoldVertical",
    "name": "LucideUnfoldVertical",
    "category": "General",
    "keywords": "lucide unfold vertical"
  },
  {
    "id": "LucideUngroup",
    "name": "LucideUngroup",
    "category": "General",
    "keywords": "lucide ungroup"
  },
  {
    "id": "LucideUniversity",
    "name": "LucideUniversity",
    "category": "General",
    "keywords": "lucide university"
  },
  {
    "id": "LucideUnlink",
    "name": "LucideUnlink",
    "category": "Symbols",
    "keywords": "lucide unlink"
  },
  {
    "id": "LucideUnlink2",
    "name": "LucideUnlink2",
    "category": "Symbols",
    "keywords": "lucide unlink2"
  },
  {
    "id": "LucideUnlock",
    "name": "LucideUnlock",
    "category": "System",
    "keywords": "lucide unlock"
  },
  {
    "id": "LucideUnlockKeyhole",
    "name": "LucideUnlockKeyhole",
    "category": "System",
    "keywords": "lucide unlock keyhole"
  },
  {
    "id": "LucideUnplug",
    "name": "LucideUnplug",
    "category": "General",
    "keywords": "lucide unplug"
  },
  {
    "id": "LucideUpload",
    "name": "LucideUpload",
    "category": "General",
    "keywords": "lucide upload"
  },
  {
    "id": "LucideUploadCloud",
    "name": "LucideUploadCloud",
    "category": "Symbols",
    "keywords": "lucide upload cloud"
  },
  {
    "id": "LucideUsb",
    "name": "LucideUsb",
    "category": "Devices",
    "keywords": "lucide usb"
  },
  {
    "id": "LucideUser",
    "name": "LucideUser",
    "category": "Symbols",
    "keywords": "lucide user"
  },
  {
    "id": "LucideUser2",
    "name": "LucideUser2",
    "category": "Symbols",
    "keywords": "lucide user2"
  },
  {
    "id": "LucideUserCheck",
    "name": "LucideUserCheck",
    "category": "Symbols",
    "keywords": "lucide user check"
  },
  {
    "id": "LucideUserCheck2",
    "name": "LucideUserCheck2",
    "category": "Symbols",
    "keywords": "lucide user check2"
  },
  {
    "id": "LucideUserCircle",
    "name": "LucideUserCircle",
    "category": "Symbols",
    "keywords": "lucide user circle"
  },
  {
    "id": "LucideUserCircle2",
    "name": "LucideUserCircle2",
    "category": "Symbols",
    "keywords": "lucide user circle2"
  },
  {
    "id": "LucideUserCog",
    "name": "LucideUserCog",
    "category": "Symbols",
    "keywords": "lucide user cog"
  },
  {
    "id": "LucideUserCog2",
    "name": "LucideUserCog2",
    "category": "Symbols",
    "keywords": "lucide user cog2"
  },
  {
    "id": "LucideUserLock",
    "name": "LucideUserLock",
    "category": "System",
    "keywords": "lucide user lock"
  },
  {
    "id": "LucideUserMinus",
    "name": "LucideUserMinus",
    "category": "Symbols",
    "keywords": "lucide user minus"
  },
  {
    "id": "LucideUserMinus2",
    "name": "LucideUserMinus2",
    "category": "Symbols",
    "keywords": "lucide user minus2"
  },
  {
    "id": "LucideUserPen",
    "name": "LucideUserPen",
    "category": "Design",
    "keywords": "lucide user pen"
  },
  {
    "id": "LucideUserPlus",
    "name": "LucideUserPlus",
    "category": "Symbols",
    "keywords": "lucide user plus"
  },
  {
    "id": "LucideUserPlus2",
    "name": "LucideUserPlus2",
    "category": "Symbols",
    "keywords": "lucide user plus2"
  },
  {
    "id": "LucideUserRound",
    "name": "LucideUserRound",
    "category": "Symbols",
    "keywords": "lucide user round"
  },
  {
    "id": "LucideUserRoundCheck",
    "name": "LucideUserRoundCheck",
    "category": "Symbols",
    "keywords": "lucide user round check"
  },
  {
    "id": "LucideUserRoundCog",
    "name": "LucideUserRoundCog",
    "category": "Symbols",
    "keywords": "lucide user round cog"
  },
  {
    "id": "LucideUserRoundMinus",
    "name": "LucideUserRoundMinus",
    "category": "Symbols",
    "keywords": "lucide user round minus"
  },
  {
    "id": "LucideUserRoundPen",
    "name": "LucideUserRoundPen",
    "category": "Design",
    "keywords": "lucide user round pen"
  },
  {
    "id": "LucideUserRoundPlus",
    "name": "LucideUserRoundPlus",
    "category": "Symbols",
    "keywords": "lucide user round plus"
  },
  {
    "id": "LucideUserRoundSearch",
    "name": "LucideUserRoundSearch",
    "category": "Symbols",
    "keywords": "lucide user round search"
  },
  {
    "id": "LucideUserRoundX",
    "name": "LucideUserRoundX",
    "category": "Symbols",
    "keywords": "lucide user round x"
  },
  {
    "id": "LucideUserSearch",
    "name": "LucideUserSearch",
    "category": "Symbols",
    "keywords": "lucide user search"
  },
  {
    "id": "LucideUserSquare",
    "name": "LucideUserSquare",
    "category": "Symbols",
    "keywords": "lucide user square"
  },
  {
    "id": "LucideUserSquare2",
    "name": "LucideUserSquare2",
    "category": "Symbols",
    "keywords": "lucide user square2"
  },
  {
    "id": "LucideUserStar",
    "name": "LucideUserStar",
    "category": "Symbols",
    "keywords": "lucide user star"
  },
  {
    "id": "LucideUserX",
    "name": "LucideUserX",
    "category": "Symbols",
    "keywords": "lucide user x"
  },
  {
    "id": "LucideUserX2",
    "name": "LucideUserX2",
    "category": "Symbols",
    "keywords": "lucide user x2"
  },
  {
    "id": "LucideUsers",
    "name": "LucideUsers",
    "category": "Symbols",
    "keywords": "lucide users"
  },
  {
    "id": "LucideUsers2",
    "name": "LucideUsers2",
    "category": "Symbols",
    "keywords": "lucide users2"
  },
  {
    "id": "LucideUsersRound",
    "name": "LucideUsersRound",
    "category": "Symbols",
    "keywords": "lucide users round"
  },
  {
    "id": "LucideUtensils",
    "name": "LucideUtensils",
    "category": "General",
    "keywords": "lucide utensils"
  },
  {
    "id": "LucideUtensilsCrossed",
    "name": "LucideUtensilsCrossed",
    "category": "Symbols",
    "keywords": "lucide utensils crossed"
  },
  {
    "id": "LucideUtilityPole",
    "name": "LucideUtilityPole",
    "category": "General",
    "keywords": "lucide utility pole"
  },
  {
    "id": "LucideVariable",
    "name": "LucideVariable",
    "category": "General",
    "keywords": "lucide variable"
  },
  {
    "id": "LucideVault",
    "name": "LucideVault",
    "category": "General",
    "keywords": "lucide vault"
  },
  {
    "id": "LucideVectorSquare",
    "name": "LucideVectorSquare",
    "category": "General",
    "keywords": "lucide vector square"
  },
  {
    "id": "LucideVegan",
    "name": "LucideVegan",
    "category": "General",
    "keywords": "lucide vegan"
  },
  {
    "id": "LucideVenetianMask",
    "name": "LucideVenetianMask",
    "category": "General",
    "keywords": "lucide venetian mask"
  },
  {
    "id": "LucideVenus",
    "name": "LucideVenus",
    "category": "General",
    "keywords": "lucide venus"
  },
  {
    "id": "LucideVenusAndMars",
    "name": "LucideVenusAndMars",
    "category": "General",
    "keywords": "lucide venus and mars"
  },
  {
    "id": "LucideVerified",
    "name": "LucideVerified",
    "category": "General",
    "keywords": "lucide verified"
  },
  {
    "id": "LucideVibrate",
    "name": "LucideVibrate",
    "category": "General",
    "keywords": "lucide vibrate"
  },
  {
    "id": "LucideVibrateOff",
    "name": "LucideVibrateOff",
    "category": "General",
    "keywords": "lucide vibrate off"
  },
  {
    "id": "LucideVideo",
    "name": "LucideVideo",
    "category": "Media",
    "keywords": "lucide video"
  },
  {
    "id": "LucideVideoOff",
    "name": "LucideVideoOff",
    "category": "Media",
    "keywords": "lucide video off"
  },
  {
    "id": "LucideVideotape",
    "name": "LucideVideotape",
    "category": "Media",
    "keywords": "lucide videotape"
  },
  {
    "id": "LucideView",
    "name": "LucideView",
    "category": "General",
    "keywords": "lucide view"
  },
  {
    "id": "LucideVoicemail",
    "name": "LucideVoicemail",
    "category": "General",
    "keywords": "lucide voicemail"
  },
  {
    "id": "LucideVolleyball",
    "name": "LucideVolleyball",
    "category": "General",
    "keywords": "lucide volleyball"
  },
  {
    "id": "LucideVolume",
    "name": "LucideVolume",
    "category": "Media",
    "keywords": "lucide volume"
  },
  {
    "id": "LucideVolume1",
    "name": "LucideVolume1",
    "category": "Media",
    "keywords": "lucide volume1"
  },
  {
    "id": "LucideVolume2",
    "name": "LucideVolume2",
    "category": "Media",
    "keywords": "lucide volume2"
  },
  {
    "id": "LucideVolumeOff",
    "name": "LucideVolumeOff",
    "category": "Media",
    "keywords": "lucide volume off"
  },
  {
    "id": "LucideVolumeX",
    "name": "LucideVolumeX",
    "category": "Media",
    "keywords": "lucide volume x"
  },
  {
    "id": "LucideVote",
    "name": "LucideVote",
    "category": "General",
    "keywords": "lucide vote"
  },
  {
    "id": "LucideWallet",
    "name": "LucideWallet",
    "category": "General",
    "keywords": "lucide wallet"
  },
  {
    "id": "LucideWallet2",
    "name": "LucideWallet2",
    "category": "General",
    "keywords": "lucide wallet2"
  },
  {
    "id": "LucideWalletCards",
    "name": "LucideWalletCards",
    "category": "General",
    "keywords": "lucide wallet cards"
  },
  {
    "id": "LucideWalletMinimal",
    "name": "LucideWalletMinimal",
    "category": "General",
    "keywords": "lucide wallet minimal"
  },
  {
    "id": "LucideWallpaper",
    "name": "LucideWallpaper",
    "category": "General",
    "keywords": "lucide wallpaper"
  },
  {
    "id": "LucideWand",
    "name": "LucideWand",
    "category": "Design",
    "keywords": "lucide wand"
  },
  {
    "id": "LucideWand2",
    "name": "LucideWand2",
    "category": "Design",
    "keywords": "lucide wand2"
  },
  {
    "id": "LucideWandSparkles",
    "name": "LucideWandSparkles",
    "category": "Design",
    "keywords": "lucide wand sparkles"
  },
  {
    "id": "LucideWarehouse",
    "name": "LucideWarehouse",
    "category": "General",
    "keywords": "lucide warehouse"
  },
  {
    "id": "LucideWashingMachine",
    "name": "LucideWashingMachine",
    "category": "General",
    "keywords": "lucide washing machine"
  },
  {
    "id": "LucideWatch",
    "name": "LucideWatch",
    "category": "Devices",
    "keywords": "lucide watch"
  },
  {
    "id": "LucideWaves",
    "name": "LucideWaves",
    "category": "General",
    "keywords": "lucide waves"
  },
  {
    "id": "LucideWavesLadder",
    "name": "LucideWavesLadder",
    "category": "General",
    "keywords": "lucide waves ladder"
  },
  {
    "id": "LucideWaypoints",
    "name": "LucideWaypoints",
    "category": "General",
    "keywords": "lucide waypoints"
  },
  {
    "id": "LucideWebcam",
    "name": "LucideWebcam",
    "category": "General",
    "keywords": "lucide webcam"
  },
  {
    "id": "LucideWebhook",
    "name": "LucideWebhook",
    "category": "General",
    "keywords": "lucide webhook"
  },
  {
    "id": "LucideWebhookOff",
    "name": "LucideWebhookOff",
    "category": "General",
    "keywords": "lucide webhook off"
  },
  {
    "id": "LucideWeight",
    "name": "LucideWeight",
    "category": "General",
    "keywords": "lucide weight"
  },
  {
    "id": "LucideWheat",
    "name": "LucideWheat",
    "category": "General",
    "keywords": "lucide wheat"
  },
  {
    "id": "LucideWheatOff",
    "name": "LucideWheatOff",
    "category": "General",
    "keywords": "lucide wheat off"
  },
  {
    "id": "LucideWholeWord",
    "name": "LucideWholeWord",
    "category": "General",
    "keywords": "lucide whole word"
  },
  {
    "id": "LucideWifi",
    "name": "LucideWifi",
    "category": "Devices",
    "keywords": "lucide wifi"
  },
  {
    "id": "LucideWifiCog",
    "name": "LucideWifiCog",
    "category": "Devices",
    "keywords": "lucide wifi cog"
  },
  {
    "id": "LucideWifiHigh",
    "name": "LucideWifiHigh",
    "category": "Devices",
    "keywords": "lucide wifi high"
  },
  {
    "id": "LucideWifiLow",
    "name": "LucideWifiLow",
    "category": "Devices",
    "keywords": "lucide wifi low"
  },
  {
    "id": "LucideWifiOff",
    "name": "LucideWifiOff",
    "category": "Devices",
    "keywords": "lucide wifi off"
  },
  {
    "id": "LucideWifiPen",
    "name": "LucideWifiPen",
    "category": "Design",
    "keywords": "lucide wifi pen"
  },
  {
    "id": "LucideWifiSync",
    "name": "LucideWifiSync",
    "category": "Devices",
    "keywords": "lucide wifi sync"
  },
  {
    "id": "LucideWifiZero",
    "name": "LucideWifiZero",
    "category": "Devices",
    "keywords": "lucide wifi zero"
  },
  {
    "id": "LucideWind",
    "name": "LucideWind",
    "category": "General",
    "keywords": "lucide wind"
  },
  {
    "id": "LucideWindArrowDown",
    "name": "LucideWindArrowDown",
    "category": "Navigation",
    "keywords": "lucide wind arrow down"
  },
  {
    "id": "LucideWine",
    "name": "LucideWine",
    "category": "General",
    "keywords": "lucide wine"
  },
  {
    "id": "LucideWineOff",
    "name": "LucideWineOff",
    "category": "General",
    "keywords": "lucide wine off"
  },
  {
    "id": "LucideWorkflow",
    "name": "LucideWorkflow",
    "category": "General",
    "keywords": "lucide workflow"
  },
  {
    "id": "LucideWorm",
    "name": "LucideWorm",
    "category": "General",
    "keywords": "lucide worm"
  },
  {
    "id": "LucideWrapText",
    "name": "LucideWrapText",
    "category": "General",
    "keywords": "lucide wrap text"
  },
  {
    "id": "LucideWrench",
    "name": "LucideWrench",
    "category": "System",
    "keywords": "lucide wrench"
  },
  {
    "id": "LucideX",
    "name": "LucideX",
    "category": "General",
    "keywords": "lucide x"
  },
  {
    "id": "LucideXCircle",
    "name": "LucideXCircle",
    "category": "General",
    "keywords": "lucide x circle"
  },
  {
    "id": "LucideXOctagon",
    "name": "LucideXOctagon",
    "category": "Symbols",
    "keywords": "lucide x octagon"
  },
  {
    "id": "LucideXSquare",
    "name": "LucideXSquare",
    "category": "General",
    "keywords": "lucide x square"
  },
  {
    "id": "LucideYoutube",
    "name": "LucideYoutube",
    "category": "General",
    "keywords": "lucide youtube"
  },
  {
    "id": "LucideZap",
    "name": "LucideZap",
    "category": "Symbols",
    "keywords": "lucide zap"
  },
  {
    "id": "LucideZapOff",
    "name": "LucideZapOff",
    "category": "Symbols",
    "keywords": "lucide zap off"
  },
  {
    "id": "LucideZoomIn",
    "name": "LucideZoomIn",
    "category": "Symbols",
    "keywords": "lucide zoom in"
  },
  {
    "id": "LucideZoomOut",
    "name": "LucideZoomOut",
    "category": "Symbols",
    "keywords": "lucide zoom out"
  },
  {
    "id": "Luggage",
    "name": "Luggage",
    "category": "General",
    "keywords": "luggage"
  },
  {
    "id": "MSquare",
    "name": "MSquare",
    "category": "General",
    "keywords": "m square"
  },
  {
    "id": "Magnet",
    "name": "Magnet",
    "category": "General",
    "keywords": "magnet"
  },
  {
    "id": "Mail",
    "name": "Mail",
    "category": "General",
    "keywords": "mail"
  },
  {
    "id": "MailCheck",
    "name": "MailCheck",
    "category": "Symbols",
    "keywords": "mail check"
  },
  {
    "id": "MailMinus",
    "name": "MailMinus",
    "category": "Symbols",
    "keywords": "mail minus"
  },
  {
    "id": "MailOpen",
    "name": "MailOpen",
    "category": "Design",
    "keywords": "mail open"
  },
  {
    "id": "MailPlus",
    "name": "MailPlus",
    "category": "Symbols",
    "keywords": "mail plus"
  },
  {
    "id": "MailQuestion",
    "name": "MailQuestion",
    "category": "General",
    "keywords": "mail question"
  },
  {
    "id": "MailQuestionMark",
    "name": "MailQuestionMark",
    "category": "General",
    "keywords": "mail question mark"
  },
  {
    "id": "MailSearch",
    "name": "MailSearch",
    "category": "Symbols",
    "keywords": "mail search"
  },
  {
    "id": "MailWarning",
    "name": "MailWarning",
    "category": "General",
    "keywords": "mail warning"
  },
  {
    "id": "MailX",
    "name": "MailX",
    "category": "General",
    "keywords": "mail x"
  },
  {
    "id": "Mailbox",
    "name": "Mailbox",
    "category": "General",
    "keywords": "mailbox"
  },
  {
    "id": "Mails",
    "name": "Mails",
    "category": "General",
    "keywords": "mails"
  },
  {
    "id": "Map",
    "name": "Map",
    "category": "General",
    "keywords": "map"
  },
  {
    "id": "MapMinus",
    "name": "MapMinus",
    "category": "Symbols",
    "keywords": "map minus"
  },
  {
    "id": "MapPin",
    "name": "MapPin",
    "category": "General",
    "keywords": "map pin"
  },
  {
    "id": "MapPinCheck",
    "name": "MapPinCheck",
    "category": "Symbols",
    "keywords": "map pin check"
  },
  {
    "id": "MapPinCheckInside",
    "name": "MapPinCheckInside",
    "category": "Symbols",
    "keywords": "map pin check inside"
  },
  {
    "id": "MapPinHouse",
    "name": "MapPinHouse",
    "category": "General",
    "keywords": "map pin house"
  },
  {
    "id": "MapPinMinus",
    "name": "MapPinMinus",
    "category": "Symbols",
    "keywords": "map pin minus"
  },
  {
    "id": "MapPinMinusInside",
    "name": "MapPinMinusInside",
    "category": "Symbols",
    "keywords": "map pin minus inside"
  },
  {
    "id": "MapPinOff",
    "name": "MapPinOff",
    "category": "General",
    "keywords": "map pin off"
  },
  {
    "id": "MapPinPen",
    "name": "MapPinPen",
    "category": "Design",
    "keywords": "map pin pen"
  },
  {
    "id": "MapPinPlus",
    "name": "MapPinPlus",
    "category": "Symbols",
    "keywords": "map pin plus"
  },
  {
    "id": "MapPinPlusInside",
    "name": "MapPinPlusInside",
    "category": "Symbols",
    "keywords": "map pin plus inside"
  },
  {
    "id": "MapPinX",
    "name": "MapPinX",
    "category": "General",
    "keywords": "map pin x"
  },
  {
    "id": "MapPinXInside",
    "name": "MapPinXInside",
    "category": "General",
    "keywords": "map pin x inside"
  },
  {
    "id": "MapPinned",
    "name": "MapPinned",
    "category": "General",
    "keywords": "map pinned"
  },
  {
    "id": "MapPlus",
    "name": "MapPlus",
    "category": "Symbols",
    "keywords": "map plus"
  },
  {
    "id": "Mars",
    "name": "Mars",
    "category": "General",
    "keywords": "mars"
  },
  {
    "id": "MarsStroke",
    "name": "MarsStroke",
    "category": "General",
    "keywords": "mars stroke"
  },
  {
    "id": "Martini",
    "name": "Martini",
    "category": "Design",
    "keywords": "martini"
  },
  {
    "id": "Maximize",
    "name": "Maximize",
    "category": "General",
    "keywords": "maximize"
  },
  {
    "id": "Maximize2",
    "name": "Maximize2",
    "category": "General",
    "keywords": "maximize2"
  },
  {
    "id": "Medal",
    "name": "Medal",
    "category": "General",
    "keywords": "medal"
  },
  {
    "id": "Megaphone",
    "name": "Megaphone",
    "category": "Devices",
    "keywords": "megaphone"
  },
  {
    "id": "MegaphoneOff",
    "name": "MegaphoneOff",
    "category": "Devices",
    "keywords": "megaphone off"
  },
  {
    "id": "Meh",
    "name": "Meh",
    "category": "General",
    "keywords": "meh"
  },
  {
    "id": "MemoryStick",
    "name": "MemoryStick",
    "category": "General",
    "keywords": "memory stick"
  },
  {
    "id": "Menu",
    "name": "Menu",
    "category": "General",
    "keywords": "menu"
  },
  {
    "id": "MenuSquare",
    "name": "MenuSquare",
    "category": "General",
    "keywords": "menu square"
  },
  {
    "id": "Merge",
    "name": "Merge",
    "category": "General",
    "keywords": "merge"
  },
  {
    "id": "MessageCircle",
    "name": "MessageCircle",
    "category": "General",
    "keywords": "message circle"
  },
  {
    "id": "MessageCircleCode",
    "name": "MessageCircleCode",
    "category": "System",
    "keywords": "message circle code"
  },
  {
    "id": "MessageCircleDashed",
    "name": "MessageCircleDashed",
    "category": "General",
    "keywords": "message circle dashed"
  },
  {
    "id": "MessageCircleHeart",
    "name": "MessageCircleHeart",
    "category": "Design",
    "keywords": "message circle heart"
  },
  {
    "id": "MessageCircleMore",
    "name": "MessageCircleMore",
    "category": "General",
    "keywords": "message circle more"
  },
  {
    "id": "MessageCircleOff",
    "name": "MessageCircleOff",
    "category": "General",
    "keywords": "message circle off"
  },
  {
    "id": "MessageCirclePlus",
    "name": "MessageCirclePlus",
    "category": "Symbols",
    "keywords": "message circle plus"
  },
  {
    "id": "MessageCircleQuestion",
    "name": "MessageCircleQuestion",
    "category": "General",
    "keywords": "message circle question"
  },
  {
    "id": "MessageCircleQuestionMark",
    "name": "MessageCircleQuestionMark",
    "category": "General",
    "keywords": "message circle question mark"
  },
  {
    "id": "MessageCircleReply",
    "name": "MessageCircleReply",
    "category": "General",
    "keywords": "message circle reply"
  },
  {
    "id": "MessageCircleWarning",
    "name": "MessageCircleWarning",
    "category": "General",
    "keywords": "message circle warning"
  },
  {
    "id": "MessageCircleX",
    "name": "MessageCircleX",
    "category": "General",
    "keywords": "message circle x"
  },
  {
    "id": "MessageSquare",
    "name": "MessageSquare",
    "category": "General",
    "keywords": "message square"
  },
  {
    "id": "MessageSquareCode",
    "name": "MessageSquareCode",
    "category": "System",
    "keywords": "message square code"
  },
  {
    "id": "MessageSquareDashed",
    "name": "MessageSquareDashed",
    "category": "General",
    "keywords": "message square dashed"
  },
  {
    "id": "MessageSquareDiff",
    "name": "MessageSquareDiff",
    "category": "General",
    "keywords": "message square diff"
  },
  {
    "id": "MessageSquareDot",
    "name": "MessageSquareDot",
    "category": "Navigation",
    "keywords": "message square dot"
  },
  {
    "id": "MessageSquareHeart",
    "name": "MessageSquareHeart",
    "category": "Design",
    "keywords": "message square heart"
  },
  {
    "id": "MessageSquareLock",
    "name": "MessageSquareLock",
    "category": "System",
    "keywords": "message square lock"
  },
  {
    "id": "MessageSquareMore",
    "name": "MessageSquareMore",
    "category": "General",
    "keywords": "message square more"
  },
  {
    "id": "MessageSquareOff",
    "name": "MessageSquareOff",
    "category": "General",
    "keywords": "message square off"
  },
  {
    "id": "MessageSquarePlus",
    "name": "MessageSquarePlus",
    "category": "Symbols",
    "keywords": "message square plus"
  },
  {
    "id": "MessageSquareQuote",
    "name": "MessageSquareQuote",
    "category": "General",
    "keywords": "message square quote"
  },
  {
    "id": "MessageSquareReply",
    "name": "MessageSquareReply",
    "category": "General",
    "keywords": "message square reply"
  },
  {
    "id": "MessageSquareShare",
    "name": "MessageSquareShare",
    "category": "Symbols",
    "keywords": "message square share"
  },
  {
    "id": "MessageSquareText",
    "name": "MessageSquareText",
    "category": "General",
    "keywords": "message square text"
  },
  {
    "id": "MessageSquareWarning",
    "name": "MessageSquareWarning",
    "category": "General",
    "keywords": "message square warning"
  },
  {
    "id": "MessageSquareX",
    "name": "MessageSquareX",
    "category": "General",
    "keywords": "message square x"
  },
  {
    "id": "MessagesSquare",
    "name": "MessagesSquare",
    "category": "General",
    "keywords": "messages square"
  },
  {
    "id": "Mic",
    "name": "Mic",
    "category": "Media",
    "keywords": "mic"
  },
  {
    "id": "Mic2",
    "name": "Mic2",
    "category": "Media",
    "keywords": "mic2"
  },
  {
    "id": "MicOff",
    "name": "MicOff",
    "category": "Media",
    "keywords": "mic off"
  },
  {
    "id": "MicVocal",
    "name": "MicVocal",
    "category": "Media",
    "keywords": "mic vocal"
  },
  {
    "id": "Microchip",
    "name": "Microchip",
    "category": "Media",
    "keywords": "microchip"
  },
  {
    "id": "Microscope",
    "name": "Microscope",
    "category": "Media",
    "keywords": "microscope"
  },
  {
    "id": "Microwave",
    "name": "Microwave",
    "category": "Media",
    "keywords": "microwave"
  },
  {
    "id": "Milestone",
    "name": "Milestone",
    "category": "General",
    "keywords": "milestone"
  },
  {
    "id": "Milk",
    "name": "Milk",
    "category": "General",
    "keywords": "milk"
  },
  {
    "id": "MilkOff",
    "name": "MilkOff",
    "category": "General",
    "keywords": "milk off"
  },
  {
    "id": "Minimize",
    "name": "Minimize",
    "category": "General",
    "keywords": "minimize"
  },
  {
    "id": "Minimize2",
    "name": "Minimize2",
    "category": "General",
    "keywords": "minimize2"
  },
  {
    "id": "Minus",
    "name": "Minus",
    "category": "Symbols",
    "keywords": "minus"
  },
  {
    "id": "MinusCircle",
    "name": "MinusCircle",
    "category": "Symbols",
    "keywords": "minus circle"
  },
  {
    "id": "MinusSquare",
    "name": "MinusSquare",
    "category": "Symbols",
    "keywords": "minus square"
  },
  {
    "id": "Monitor",
    "name": "Monitor",
    "category": "Devices",
    "keywords": "monitor"
  },
  {
    "id": "MonitorCheck",
    "name": "MonitorCheck",
    "category": "Devices",
    "keywords": "monitor check"
  },
  {
    "id": "MonitorCloud",
    "name": "MonitorCloud",
    "category": "Devices",
    "keywords": "monitor cloud"
  },
  {
    "id": "MonitorCog",
    "name": "MonitorCog",
    "category": "Devices",
    "keywords": "monitor cog"
  },
  {
    "id": "MonitorDot",
    "name": "MonitorDot",
    "category": "Devices",
    "keywords": "monitor dot"
  },
  {
    "id": "MonitorDown",
    "name": "MonitorDown",
    "category": "Devices",
    "keywords": "monitor down"
  },
  {
    "id": "MonitorOff",
    "name": "MonitorOff",
    "category": "Devices",
    "keywords": "monitor off"
  },
  {
    "id": "MonitorPause",
    "name": "MonitorPause",
    "category": "Media",
    "keywords": "monitor pause"
  },
  {
    "id": "MonitorPlay",
    "name": "MonitorPlay",
    "category": "Media",
    "keywords": "monitor play"
  },
  {
    "id": "MonitorSmartphone",
    "name": "MonitorSmartphone",
    "category": "Design",
    "keywords": "monitor smartphone"
  },
  {
    "id": "MonitorSpeaker",
    "name": "MonitorSpeaker",
    "category": "Media",
    "keywords": "monitor speaker"
  },
  {
    "id": "MonitorStop",
    "name": "MonitorStop",
    "category": "Devices",
    "keywords": "monitor stop"
  },
  {
    "id": "MonitorUp",
    "name": "MonitorUp",
    "category": "Devices",
    "keywords": "monitor up"
  },
  {
    "id": "MonitorX",
    "name": "MonitorX",
    "category": "Devices",
    "keywords": "monitor x"
  },
  {
    "id": "Moon",
    "name": "Moon",
    "category": "Symbols",
    "keywords": "moon"
  },
  {
    "id": "MoonStar",
    "name": "MoonStar",
    "category": "Symbols",
    "keywords": "moon star"
  },
  {
    "id": "MoreHorizontal",
    "name": "MoreHorizontal",
    "category": "General",
    "keywords": "more horizontal"
  },
  {
    "id": "MoreVertical",
    "name": "MoreVertical",
    "category": "General",
    "keywords": "more vertical"
  },
  {
    "id": "Motorbike",
    "name": "Motorbike",
    "category": "General",
    "keywords": "motorbike"
  },
  {
    "id": "Mountain",
    "name": "Mountain",
    "category": "General",
    "keywords": "mountain"
  },
  {
    "id": "MountainSnow",
    "name": "MountainSnow",
    "category": "General",
    "keywords": "mountain snow"
  },
  {
    "id": "Mouse",
    "name": "Mouse",
    "category": "Devices",
    "keywords": "mouse"
  },
  {
    "id": "MouseOff",
    "name": "MouseOff",
    "category": "Devices",
    "keywords": "mouse off"
  },
  {
    "id": "MousePointer",
    "name": "MousePointer",
    "category": "Devices",
    "keywords": "mouse pointer"
  },
  {
    "id": "MousePointer2",
    "name": "MousePointer2",
    "category": "Devices",
    "keywords": "mouse pointer2"
  },
  {
    "id": "MousePointerBan",
    "name": "MousePointerBan",
    "category": "Devices",
    "keywords": "mouse pointer ban"
  },
  {
    "id": "MousePointerClick",
    "name": "MousePointerClick",
    "category": "Devices",
    "keywords": "mouse pointer click"
  },
  {
    "id": "MousePointerSquareDashed",
    "name": "MousePointerSquareDashed",
    "category": "Devices",
    "keywords": "mouse pointer square dashed"
  },
  {
    "id": "Move",
    "name": "Move",
    "category": "Navigation",
    "keywords": "move"
  },
  {
    "id": "Move3D",
    "name": "Move3D",
    "category": "Navigation",
    "keywords": "move3 d"
  },
  {
    "id": "Move3d",
    "name": "Move3d",
    "category": "Navigation",
    "keywords": "move3d"
  },
  {
    "id": "MoveDiagonal",
    "name": "MoveDiagonal",
    "category": "Navigation",
    "keywords": "move diagonal"
  },
  {
    "id": "MoveDiagonal2",
    "name": "MoveDiagonal2",
    "category": "Navigation",
    "keywords": "move diagonal2"
  },
  {
    "id": "MoveDown",
    "name": "MoveDown",
    "category": "Navigation",
    "keywords": "move down"
  },
  {
    "id": "MoveDownLeft",
    "name": "MoveDownLeft",
    "category": "Navigation",
    "keywords": "move down left"
  },
  {
    "id": "MoveDownRight",
    "name": "MoveDownRight",
    "category": "Navigation",
    "keywords": "move down right"
  },
  {
    "id": "MoveHorizontal",
    "name": "MoveHorizontal",
    "category": "Navigation",
    "keywords": "move horizontal"
  },
  {
    "id": "MoveLeft",
    "name": "MoveLeft",
    "category": "Navigation",
    "keywords": "move left"
  },
  {
    "id": "MoveRight",
    "name": "MoveRight",
    "category": "Navigation",
    "keywords": "move right"
  },
  {
    "id": "MoveUp",
    "name": "MoveUp",
    "category": "Navigation",
    "keywords": "move up"
  },
  {
    "id": "MoveUpLeft",
    "name": "MoveUpLeft",
    "category": "Navigation",
    "keywords": "move up left"
  },
  {
    "id": "MoveUpRight",
    "name": "MoveUpRight",
    "category": "Navigation",
    "keywords": "move up right"
  },
  {
    "id": "MoveVertical",
    "name": "MoveVertical",
    "category": "Navigation",
    "keywords": "move vertical"
  },
  {
    "id": "Music",
    "name": "Music",
    "category": "Media",
    "keywords": "music"
  },
  {
    "id": "Music2",
    "name": "Music2",
    "category": "Media",
    "keywords": "music2"
  },
  {
    "id": "Music3",
    "name": "Music3",
    "category": "Media",
    "keywords": "music3"
  },
  {
    "id": "Music4",
    "name": "Music4",
    "category": "Media",
    "keywords": "music4"
  },
  {
    "id": "Navigation",
    "name": "Navigation",
    "category": "Navigation",
    "keywords": "navigation"
  },
  {
    "id": "Navigation2",
    "name": "Navigation2",
    "category": "Navigation",
    "keywords": "navigation2"
  },
  {
    "id": "Navigation2Off",
    "name": "Navigation2Off",
    "category": "Navigation",
    "keywords": "navigation2 off"
  },
  {
    "id": "NavigationOff",
    "name": "NavigationOff",
    "category": "Navigation",
    "keywords": "navigation off"
  },
  {
    "id": "Network",
    "name": "Network",
    "category": "General",
    "keywords": "network"
  },
  {
    "id": "Newspaper",
    "name": "Newspaper",
    "category": "General",
    "keywords": "newspaper"
  },
  {
    "id": "Nfc",
    "name": "Nfc",
    "category": "General",
    "keywords": "nfc"
  },
  {
    "id": "NonBinary",
    "name": "NonBinary",
    "category": "System",
    "keywords": "non binary"
  },
  {
    "id": "Notebook",
    "name": "Notebook",
    "category": "General",
    "keywords": "notebook"
  },
  {
    "id": "NotebookPen",
    "name": "NotebookPen",
    "category": "Design",
    "keywords": "notebook pen"
  },
  {
    "id": "NotebookTabs",
    "name": "NotebookTabs",
    "category": "General",
    "keywords": "notebook tabs"
  },
  {
    "id": "NotebookText",
    "name": "NotebookText",
    "category": "General",
    "keywords": "notebook text"
  },
  {
    "id": "NotepadText",
    "name": "NotepadText",
    "category": "General",
    "keywords": "notepad text"
  },
  {
    "id": "NotepadTextDashed",
    "name": "NotepadTextDashed",
    "category": "General",
    "keywords": "notepad text dashed"
  },
  {
    "id": "Nut",
    "name": "Nut",
    "category": "General",
    "keywords": "nut"
  },
  {
    "id": "NutOff",
    "name": "NutOff",
    "category": "General",
    "keywords": "nut off"
  },
  {
    "id": "Octagon",
    "name": "Octagon",
    "category": "Symbols",
    "keywords": "octagon"
  },
  {
    "id": "OctagonAlert",
    "name": "OctagonAlert",
    "category": "Symbols",
    "keywords": "octagon alert"
  },
  {
    "id": "OctagonMinus",
    "name": "OctagonMinus",
    "category": "Symbols",
    "keywords": "octagon minus"
  },
  {
    "id": "OctagonPause",
    "name": "OctagonPause",
    "category": "Media",
    "keywords": "octagon pause"
  },
  {
    "id": "OctagonX",
    "name": "OctagonX",
    "category": "Symbols",
    "keywords": "octagon x"
  },
  {
    "id": "Omega",
    "name": "Omega",
    "category": "General",
    "keywords": "omega"
  },
  {
    "id": "Option",
    "name": "Option",
    "category": "General",
    "keywords": "option"
  },
  {
    "id": "Orbit",
    "name": "Orbit",
    "category": "General",
    "keywords": "orbit"
  },
  {
    "id": "Origami",
    "name": "Origami",
    "category": "General",
    "keywords": "origami"
  },
  {
    "id": "Outdent",
    "name": "Outdent",
    "category": "General",
    "keywords": "outdent"
  },
  {
    "id": "Package",
    "name": "Package",
    "category": "General",
    "keywords": "package"
  },
  {
    "id": "Package2",
    "name": "Package2",
    "category": "General",
    "keywords": "package2"
  },
  {
    "id": "PackageCheck",
    "name": "PackageCheck",
    "category": "Symbols",
    "keywords": "package check"
  },
  {
    "id": "PackageMinus",
    "name": "PackageMinus",
    "category": "Symbols",
    "keywords": "package minus"
  },
  {
    "id": "PackageOpen",
    "name": "PackageOpen",
    "category": "Design",
    "keywords": "package open"
  },
  {
    "id": "PackagePlus",
    "name": "PackagePlus",
    "category": "Symbols",
    "keywords": "package plus"
  },
  {
    "id": "PackageSearch",
    "name": "PackageSearch",
    "category": "Symbols",
    "keywords": "package search"
  },
  {
    "id": "PackageX",
    "name": "PackageX",
    "category": "General",
    "keywords": "package x"
  },
  {
    "id": "PaintBucket",
    "name": "PaintBucket",
    "category": "Design",
    "keywords": "paint bucket"
  },
  {
    "id": "PaintRoller",
    "name": "PaintRoller",
    "category": "Design",
    "keywords": "paint roller"
  },
  {
    "id": "Paintbrush",
    "name": "Paintbrush",
    "category": "Design",
    "keywords": "paintbrush"
  },
  {
    "id": "Paintbrush2",
    "name": "Paintbrush2",
    "category": "Design",
    "keywords": "paintbrush2"
  },
  {
    "id": "PaintbrushVertical",
    "name": "PaintbrushVertical",
    "category": "Design",
    "keywords": "paintbrush vertical"
  },
  {
    "id": "Palette",
    "name": "Palette",
    "category": "Design",
    "keywords": "palette"
  },
  {
    "id": "Palmtree",
    "name": "Palmtree",
    "category": "General",
    "keywords": "palmtree"
  },
  {
    "id": "Panda",
    "name": "Panda",
    "category": "General",
    "keywords": "panda"
  },
  {
    "id": "PanelBottom",
    "name": "PanelBottom",
    "category": "General",
    "keywords": "panel bottom"
  },
  {
    "id": "PanelBottomClose",
    "name": "PanelBottomClose",
    "category": "General",
    "keywords": "panel bottom close"
  },
  {
    "id": "PanelBottomDashed",
    "name": "PanelBottomDashed",
    "category": "General",
    "keywords": "panel bottom dashed"
  },
  {
    "id": "PanelBottomInactive",
    "name": "PanelBottomInactive",
    "category": "General",
    "keywords": "panel bottom inactive"
  },
  {
    "id": "PanelBottomOpen",
    "name": "PanelBottomOpen",
    "category": "Design",
    "keywords": "panel bottom open"
  },
  {
    "id": "PanelLeft",
    "name": "PanelLeft",
    "category": "General",
    "keywords": "panel left"
  },
  {
    "id": "PanelLeftClose",
    "name": "PanelLeftClose",
    "category": "General",
    "keywords": "panel left close"
  },
  {
    "id": "PanelLeftDashed",
    "name": "PanelLeftDashed",
    "category": "General",
    "keywords": "panel left dashed"
  },
  {
    "id": "PanelLeftInactive",
    "name": "PanelLeftInactive",
    "category": "General",
    "keywords": "panel left inactive"
  },
  {
    "id": "PanelLeftOpen",
    "name": "PanelLeftOpen",
    "category": "Design",
    "keywords": "panel left open"
  },
  {
    "id": "PanelLeftRightDashed",
    "name": "PanelLeftRightDashed",
    "category": "General",
    "keywords": "panel left right dashed"
  },
  {
    "id": "PanelRight",
    "name": "PanelRight",
    "category": "General",
    "keywords": "panel right"
  },
  {
    "id": "PanelRightClose",
    "name": "PanelRightClose",
    "category": "General",
    "keywords": "panel right close"
  },
  {
    "id": "PanelRightDashed",
    "name": "PanelRightDashed",
    "category": "General",
    "keywords": "panel right dashed"
  },
  {
    "id": "PanelRightInactive",
    "name": "PanelRightInactive",
    "category": "General",
    "keywords": "panel right inactive"
  },
  {
    "id": "PanelRightOpen",
    "name": "PanelRightOpen",
    "category": "Design",
    "keywords": "panel right open"
  },
  {
    "id": "PanelTop",
    "name": "PanelTop",
    "category": "General",
    "keywords": "panel top"
  },
  {
    "id": "PanelTopBottomDashed",
    "name": "PanelTopBottomDashed",
    "category": "General",
    "keywords": "panel top bottom dashed"
  },
  {
    "id": "PanelTopClose",
    "name": "PanelTopClose",
    "category": "General",
    "keywords": "panel top close"
  },
  {
    "id": "PanelTopDashed",
    "name": "PanelTopDashed",
    "category": "General",
    "keywords": "panel top dashed"
  },
  {
    "id": "PanelTopInactive",
    "name": "PanelTopInactive",
    "category": "General",
    "keywords": "panel top inactive"
  },
  {
    "id": "PanelTopOpen",
    "name": "PanelTopOpen",
    "category": "Design",
    "keywords": "panel top open"
  },
  {
    "id": "PanelsLeftBottom",
    "name": "PanelsLeftBottom",
    "category": "General",
    "keywords": "panels left bottom"
  },
  {
    "id": "PanelsLeftRight",
    "name": "PanelsLeftRight",
    "category": "General",
    "keywords": "panels left right"
  },
  {
    "id": "PanelsRightBottom",
    "name": "PanelsRightBottom",
    "category": "General",
    "keywords": "panels right bottom"
  },
  {
    "id": "PanelsTopBottom",
    "name": "PanelsTopBottom",
    "category": "General",
    "keywords": "panels top bottom"
  },
  {
    "id": "PanelsTopLeft",
    "name": "PanelsTopLeft",
    "category": "General",
    "keywords": "panels top left"
  },
  {
    "id": "Paperclip",
    "name": "Paperclip",
    "category": "General",
    "keywords": "paperclip"
  },
  {
    "id": "Parentheses",
    "name": "Parentheses",
    "category": "General",
    "keywords": "parentheses"
  },
  {
    "id": "ParkingCircle",
    "name": "ParkingCircle",
    "category": "General",
    "keywords": "parking circle"
  },
  {
    "id": "ParkingCircleOff",
    "name": "ParkingCircleOff",
    "category": "General",
    "keywords": "parking circle off"
  },
  {
    "id": "ParkingMeter",
    "name": "ParkingMeter",
    "category": "General",
    "keywords": "parking meter"
  },
  {
    "id": "ParkingSquare",
    "name": "ParkingSquare",
    "category": "General",
    "keywords": "parking square"
  },
  {
    "id": "ParkingSquareOff",
    "name": "ParkingSquareOff",
    "category": "General",
    "keywords": "parking square off"
  },
  {
    "id": "PartyPopper",
    "name": "PartyPopper",
    "category": "Design",
    "keywords": "party popper"
  },
  {
    "id": "Pause",
    "name": "Pause",
    "category": "Media",
    "keywords": "pause"
  },
  {
    "id": "PauseCircle",
    "name": "PauseCircle",
    "category": "Media",
    "keywords": "pause circle"
  },
  {
    "id": "PauseOctagon",
    "name": "PauseOctagon",
    "category": "Media",
    "keywords": "pause octagon"
  },
  {
    "id": "PawPrint",
    "name": "PawPrint",
    "category": "General",
    "keywords": "paw print"
  },
  {
    "id": "PcCase",
    "name": "PcCase",
    "category": "General",
    "keywords": "pc case"
  },
  {
    "id": "Pen",
    "name": "Pen",
    "category": "Design",
    "keywords": "pen"
  },
  {
    "id": "PenBox",
    "name": "PenBox",
    "category": "Design",
    "keywords": "pen box"
  },
  {
    "id": "PenLine",
    "name": "PenLine",
    "category": "Design",
    "keywords": "pen line"
  },
  {
    "id": "PenOff",
    "name": "PenOff",
    "category": "Design",
    "keywords": "pen off"
  },
  {
    "id": "PenSquare",
    "name": "PenSquare",
    "category": "Design",
    "keywords": "pen square"
  },
  {
    "id": "PenTool",
    "name": "PenTool",
    "category": "Design",
    "keywords": "pen tool"
  },
  {
    "id": "Pencil",
    "name": "Pencil",
    "category": "Design",
    "keywords": "pencil"
  },
  {
    "id": "PencilLine",
    "name": "PencilLine",
    "category": "Design",
    "keywords": "pencil line"
  },
  {
    "id": "PencilOff",
    "name": "PencilOff",
    "category": "Design",
    "keywords": "pencil off"
  },
  {
    "id": "PencilRuler",
    "name": "PencilRuler",
    "category": "Design",
    "keywords": "pencil ruler"
  },
  {
    "id": "Pentagon",
    "name": "Pentagon",
    "category": "Design",
    "keywords": "pentagon"
  },
  {
    "id": "Percent",
    "name": "Percent",
    "category": "General",
    "keywords": "percent"
  },
  {
    "id": "PercentCircle",
    "name": "PercentCircle",
    "category": "General",
    "keywords": "percent circle"
  },
  {
    "id": "PercentDiamond",
    "name": "PercentDiamond",
    "category": "General",
    "keywords": "percent diamond"
  },
  {
    "id": "PercentSquare",
    "name": "PercentSquare",
    "category": "General",
    "keywords": "percent square"
  },
  {
    "id": "PersonStanding",
    "name": "PersonStanding",
    "category": "General",
    "keywords": "person standing"
  },
  {
    "id": "PhilippinePeso",
    "name": "PhilippinePeso",
    "category": "General",
    "keywords": "philippine peso"
  },
  {
    "id": "Phone",
    "name": "Phone",
    "category": "Devices",
    "keywords": "phone"
  },
  {
    "id": "PhoneCall",
    "name": "PhoneCall",
    "category": "Devices",
    "keywords": "phone call"
  },
  {
    "id": "PhoneForwarded",
    "name": "PhoneForwarded",
    "category": "Devices",
    "keywords": "phone forwarded"
  },
  {
    "id": "PhoneIncoming",
    "name": "PhoneIncoming",
    "category": "Devices",
    "keywords": "phone incoming"
  },
  {
    "id": "PhoneMissed",
    "name": "PhoneMissed",
    "category": "Devices",
    "keywords": "phone missed"
  },
  {
    "id": "PhoneOff",
    "name": "PhoneOff",
    "category": "Devices",
    "keywords": "phone off"
  },
  {
    "id": "PhoneOutgoing",
    "name": "PhoneOutgoing",
    "category": "Devices",
    "keywords": "phone outgoing"
  },
  {
    "id": "Pi",
    "name": "Pi",
    "category": "General",
    "keywords": "pi"
  },
  {
    "id": "PiSquare",
    "name": "PiSquare",
    "category": "General",
    "keywords": "pi square"
  },
  {
    "id": "Piano",
    "name": "Piano",
    "category": "General",
    "keywords": "piano"
  },
  {
    "id": "Pickaxe",
    "name": "Pickaxe",
    "category": "General",
    "keywords": "pickaxe"
  },
  {
    "id": "PictureInPicture",
    "name": "PictureInPicture",
    "category": "General",
    "keywords": "picture in picture"
  },
  {
    "id": "PictureInPicture2",
    "name": "PictureInPicture2",
    "category": "General",
    "keywords": "picture in picture2"
  },
  {
    "id": "PieChart",
    "name": "PieChart",
    "category": "Design",
    "keywords": "pie chart"
  },
  {
    "id": "PiggyBank",
    "name": "PiggyBank",
    "category": "General",
    "keywords": "piggy bank"
  },
  {
    "id": "Pilcrow",
    "name": "Pilcrow",
    "category": "General",
    "keywords": "pilcrow"
  },
  {
    "id": "PilcrowLeft",
    "name": "PilcrowLeft",
    "category": "General",
    "keywords": "pilcrow left"
  },
  {
    "id": "PilcrowRight",
    "name": "PilcrowRight",
    "category": "General",
    "keywords": "pilcrow right"
  },
  {
    "id": "PilcrowSquare",
    "name": "PilcrowSquare",
    "category": "General",
    "keywords": "pilcrow square"
  },
  {
    "id": "Pill",
    "name": "Pill",
    "category": "General",
    "keywords": "pill"
  },
  {
    "id": "PillBottle",
    "name": "PillBottle",
    "category": "General",
    "keywords": "pill bottle"
  },
  {
    "id": "Pin",
    "name": "Pin",
    "category": "General",
    "keywords": "pin"
  },
  {
    "id": "PinOff",
    "name": "PinOff",
    "category": "General",
    "keywords": "pin off"
  },
  {
    "id": "Pipette",
    "name": "Pipette",
    "category": "General",
    "keywords": "pipette"
  },
  {
    "id": "Pizza",
    "name": "Pizza",
    "category": "General",
    "keywords": "pizza"
  },
  {
    "id": "Plane",
    "name": "Plane",
    "category": "General",
    "keywords": "plane"
  },
  {
    "id": "PlaneLanding",
    "name": "PlaneLanding",
    "category": "General",
    "keywords": "plane landing"
  },
  {
    "id": "PlaneTakeoff",
    "name": "PlaneTakeoff",
    "category": "General",
    "keywords": "plane takeoff"
  },
  {
    "id": "Play",
    "name": "Play",
    "category": "Media",
    "keywords": "play"
  },
  {
    "id": "PlayCircle",
    "name": "PlayCircle",
    "category": "Media",
    "keywords": "play circle"
  },
  {
    "id": "PlaySquare",
    "name": "PlaySquare",
    "category": "Media",
    "keywords": "play square"
  },
  {
    "id": "Plug",
    "name": "Plug",
    "category": "General",
    "keywords": "plug"
  },
  {
    "id": "Plug2",
    "name": "Plug2",
    "category": "General",
    "keywords": "plug2"
  },
  {
    "id": "PlugZap",
    "name": "PlugZap",
    "category": "Symbols",
    "keywords": "plug zap"
  },
  {
    "id": "PlugZap2",
    "name": "PlugZap2",
    "category": "Symbols",
    "keywords": "plug zap2"
  },
  {
    "id": "Plus",
    "name": "Plus",
    "category": "Symbols",
    "keywords": "plus"
  },
  {
    "id": "PlusCircle",
    "name": "PlusCircle",
    "category": "Symbols",
    "keywords": "plus circle"
  },
  {
    "id": "PlusSquare",
    "name": "PlusSquare",
    "category": "Symbols",
    "keywords": "plus square"
  },
  {
    "id": "Pocket",
    "name": "Pocket",
    "category": "General",
    "keywords": "pocket"
  },
  {
    "id": "PocketKnife",
    "name": "PocketKnife",
    "category": "General",
    "keywords": "pocket knife"
  },
  {
    "id": "Podcast",
    "name": "Podcast",
    "category": "Media",
    "keywords": "podcast"
  },
  {
    "id": "Pointer",
    "name": "Pointer",
    "category": "General",
    "keywords": "pointer"
  },
  {
    "id": "PointerOff",
    "name": "PointerOff",
    "category": "General",
    "keywords": "pointer off"
  },
  {
    "id": "Popcorn",
    "name": "Popcorn",
    "category": "General",
    "keywords": "popcorn"
  },
  {
    "id": "Popsicle",
    "name": "Popsicle",
    "category": "General",
    "keywords": "popsicle"
  },
  {
    "id": "PoundSterling",
    "name": "PoundSterling",
    "category": "General",
    "keywords": "pound sterling"
  },
  {
    "id": "Power",
    "name": "Power",
    "category": "Devices",
    "keywords": "power"
  },
  {
    "id": "PowerCircle",
    "name": "PowerCircle",
    "category": "Devices",
    "keywords": "power circle"
  },
  {
    "id": "PowerOff",
    "name": "PowerOff",
    "category": "Devices",
    "keywords": "power off"
  },
  {
    "id": "PowerSquare",
    "name": "PowerSquare",
    "category": "Devices",
    "keywords": "power square"
  },
  {
    "id": "Presentation",
    "name": "Presentation",
    "category": "General",
    "keywords": "presentation"
  },
  {
    "id": "Printer",
    "name": "Printer",
    "category": "Devices",
    "keywords": "printer"
  },
  {
    "id": "PrinterCheck",
    "name": "PrinterCheck",
    "category": "Devices",
    "keywords": "printer check"
  },
  {
    "id": "Projector",
    "name": "Projector",
    "category": "General",
    "keywords": "projector"
  },
  {
    "id": "Proportions",
    "name": "Proportions",
    "category": "General",
    "keywords": "proportions"
  },
  {
    "id": "Puzzle",
    "name": "Puzzle",
    "category": "General",
    "keywords": "puzzle"
  },
  {
    "id": "Pyramid",
    "name": "Pyramid",
    "category": "General",
    "keywords": "pyramid"
  },
  {
    "id": "QrCode",
    "name": "QrCode",
    "category": "System",
    "keywords": "qr code"
  },
  {
    "id": "Quote",
    "name": "Quote",
    "category": "General",
    "keywords": "quote"
  },
  {
    "id": "Rabbit",
    "name": "Rabbit",
    "category": "General",
    "keywords": "rabbit"
  },
  {
    "id": "Radar",
    "name": "Radar",
    "category": "General",
    "keywords": "radar"
  },
  {
    "id": "Radiation",
    "name": "Radiation",
    "category": "General",
    "keywords": "radiation"
  },
  {
    "id": "Radical",
    "name": "Radical",
    "category": "General",
    "keywords": "radical"
  },
  {
    "id": "Radio",
    "name": "Radio",
    "category": "Media",
    "keywords": "radio"
  },
  {
    "id": "RadioReceiver",
    "name": "RadioReceiver",
    "category": "Media",
    "keywords": "radio receiver"
  },
  {
    "id": "RadioTower",
    "name": "RadioTower",
    "category": "Media",
    "keywords": "radio tower"
  },
  {
    "id": "Radius",
    "name": "Radius",
    "category": "General",
    "keywords": "radius"
  },
  {
    "id": "RailSymbol",
    "name": "RailSymbol",
    "category": "General",
    "keywords": "rail symbol"
  },
  {
    "id": "Rainbow",
    "name": "Rainbow",
    "category": "General",
    "keywords": "rainbow"
  },
  {
    "id": "Rat",
    "name": "Rat",
    "category": "General",
    "keywords": "rat"
  },
  {
    "id": "Ratio",
    "name": "Ratio",
    "category": "General",
    "keywords": "ratio"
  },
  {
    "id": "Receipt",
    "name": "Receipt",
    "category": "General",
    "keywords": "receipt"
  },
  {
    "id": "ReceiptCent",
    "name": "ReceiptCent",
    "category": "General",
    "keywords": "receipt cent"
  },
  {
    "id": "ReceiptEuro",
    "name": "ReceiptEuro",
    "category": "General",
    "keywords": "receipt euro"
  },
  {
    "id": "ReceiptIndianRupee",
    "name": "ReceiptIndianRupee",
    "category": "General",
    "keywords": "receipt indian rupee"
  },
  {
    "id": "ReceiptJapaneseYen",
    "name": "ReceiptJapaneseYen",
    "category": "Symbols",
    "keywords": "receipt japanese yen"
  },
  {
    "id": "ReceiptPoundSterling",
    "name": "ReceiptPoundSterling",
    "category": "General",
    "keywords": "receipt pound sterling"
  },
  {
    "id": "ReceiptRussianRuble",
    "name": "ReceiptRussianRuble",
    "category": "General",
    "keywords": "receipt russian ruble"
  },
  {
    "id": "ReceiptSwissFranc",
    "name": "ReceiptSwissFranc",
    "category": "General",
    "keywords": "receipt swiss franc"
  },
  {
    "id": "ReceiptText",
    "name": "ReceiptText",
    "category": "General",
    "keywords": "receipt text"
  },
  {
    "id": "ReceiptTurkishLira",
    "name": "ReceiptTurkishLira",
    "category": "General",
    "keywords": "receipt turkish lira"
  },
  {
    "id": "RectangleCircle",
    "name": "RectangleCircle",
    "category": "General",
    "keywords": "rectangle circle"
  },
  {
    "id": "RectangleEllipsis",
    "name": "RectangleEllipsis",
    "category": "General",
    "keywords": "rectangle ellipsis"
  },
  {
    "id": "RectangleGoggles",
    "name": "RectangleGoggles",
    "category": "General",
    "keywords": "rectangle goggles"
  },
  {
    "id": "RectangleHorizontal",
    "name": "RectangleHorizontal",
    "category": "General",
    "keywords": "rectangle horizontal"
  },
  {
    "id": "RectangleVertical",
    "name": "RectangleVertical",
    "category": "General",
    "keywords": "rectangle vertical"
  },
  {
    "id": "Recycle",
    "name": "Recycle",
    "category": "General",
    "keywords": "recycle"
  },
  {
    "id": "Redo",
    "name": "Redo",
    "category": "Navigation",
    "keywords": "redo"
  },
  {
    "id": "Redo2",
    "name": "Redo2",
    "category": "Navigation",
    "keywords": "redo2"
  },
  {
    "id": "RedoDot",
    "name": "RedoDot",
    "category": "Navigation",
    "keywords": "redo dot"
  },
  {
    "id": "RefreshCcw",
    "name": "RefreshCcw",
    "category": "Navigation",
    "keywords": "refresh ccw"
  },
  {
    "id": "RefreshCcwDot",
    "name": "RefreshCcwDot",
    "category": "Navigation",
    "keywords": "refresh ccw dot"
  },
  {
    "id": "RefreshCw",
    "name": "RefreshCw",
    "category": "Navigation",
    "keywords": "refresh cw"
  },
  {
    "id": "RefreshCwOff",
    "name": "RefreshCwOff",
    "category": "Navigation",
    "keywords": "refresh cw off"
  },
  {
    "id": "Refrigerator",
    "name": "Refrigerator",
    "category": "General",
    "keywords": "refrigerator"
  },
  {
    "id": "Regex",
    "name": "Regex",
    "category": "General",
    "keywords": "regex"
  },
  {
    "id": "RemoveFormatting",
    "name": "RemoveFormatting",
    "category": "Navigation",
    "keywords": "remove formatting"
  },
  {
    "id": "Repeat",
    "name": "Repeat",
    "category": "Navigation",
    "keywords": "repeat"
  },
  {
    "id": "Repeat1",
    "name": "Repeat1",
    "category": "Navigation",
    "keywords": "repeat1"
  },
  {
    "id": "Repeat2",
    "name": "Repeat2",
    "category": "Navigation",
    "keywords": "repeat2"
  },
  {
    "id": "Replace",
    "name": "Replace",
    "category": "General",
    "keywords": "replace"
  },
  {
    "id": "ReplaceAll",
    "name": "ReplaceAll",
    "category": "General",
    "keywords": "replace all"
  },
  {
    "id": "Reply",
    "name": "Reply",
    "category": "General",
    "keywords": "reply"
  },
  {
    "id": "ReplyAll",
    "name": "ReplyAll",
    "category": "General",
    "keywords": "reply all"
  },
  {
    "id": "Rewind",
    "name": "Rewind",
    "category": "General",
    "keywords": "rewind"
  },
  {
    "id": "Ribbon",
    "name": "Ribbon",
    "category": "General",
    "keywords": "ribbon"
  },
  {
    "id": "Rocket",
    "name": "Rocket",
    "category": "General",
    "keywords": "rocket"
  },
  {
    "id": "RockingChair",
    "name": "RockingChair",
    "category": "General",
    "keywords": "rocking chair"
  },
  {
    "id": "RollerCoaster",
    "name": "RollerCoaster",
    "category": "General",
    "keywords": "roller coaster"
  },
  {
    "id": "Rose",
    "name": "Rose",
    "category": "General",
    "keywords": "rose"
  },
  {
    "id": "Rotate3D",
    "name": "Rotate3D",
    "category": "Navigation",
    "keywords": "rotate3 d"
  },
  {
    "id": "Rotate3d",
    "name": "Rotate3d",
    "category": "Navigation",
    "keywords": "rotate3d"
  },
  {
    "id": "RotateCcw",
    "name": "RotateCcw",
    "category": "Navigation",
    "keywords": "rotate ccw"
  },
  {
    "id": "RotateCcwKey",
    "name": "RotateCcwKey",
    "category": "Navigation",
    "keywords": "rotate ccw key"
  },
  {
    "id": "RotateCcwSquare",
    "name": "RotateCcwSquare",
    "category": "Navigation",
    "keywords": "rotate ccw square"
  },
  {
    "id": "RotateCw",
    "name": "RotateCw",
    "category": "Navigation",
    "keywords": "rotate cw"
  },
  {
    "id": "RotateCwSquare",
    "name": "RotateCwSquare",
    "category": "Navigation",
    "keywords": "rotate cw square"
  },
  {
    "id": "Route",
    "name": "Route",
    "category": "General",
    "keywords": "route"
  },
  {
    "id": "RouteOff",
    "name": "RouteOff",
    "category": "General",
    "keywords": "route off"
  },
  {
    "id": "Router",
    "name": "Router",
    "category": "General",
    "keywords": "router"
  },
  {
    "id": "Rows",
    "name": "Rows",
    "category": "General",
    "keywords": "rows"
  },
  {
    "id": "Rows2",
    "name": "Rows2",
    "category": "General",
    "keywords": "rows2"
  },
  {
    "id": "Rows3",
    "name": "Rows3",
    "category": "General",
    "keywords": "rows3"
  },
  {
    "id": "Rows4",
    "name": "Rows4",
    "category": "General",
    "keywords": "rows4"
  },
  {
    "id": "Rss",
    "name": "Rss",
    "category": "General",
    "keywords": "rss"
  },
  {
    "id": "Ruler",
    "name": "Ruler",
    "category": "Design",
    "keywords": "ruler"
  },
  {
    "id": "RulerDimensionLine",
    "name": "RulerDimensionLine",
    "category": "Design",
    "keywords": "ruler dimension line"
  },
  {
    "id": "RussianRuble",
    "name": "RussianRuble",
    "category": "General",
    "keywords": "russian ruble"
  },
  {
    "id": "Sailboat",
    "name": "Sailboat",
    "category": "General",
    "keywords": "sailboat"
  },
  {
    "id": "Salad",
    "name": "Salad",
    "category": "General",
    "keywords": "salad"
  },
  {
    "id": "Sandwich",
    "name": "Sandwich",
    "category": "General",
    "keywords": "sandwich"
  },
  {
    "id": "Satellite",
    "name": "Satellite",
    "category": "General",
    "keywords": "satellite"
  },
  {
    "id": "SatelliteDish",
    "name": "SatelliteDish",
    "category": "General",
    "keywords": "satellite dish"
  },
  {
    "id": "SaudiRiyal",
    "name": "SaudiRiyal",
    "category": "General",
    "keywords": "saudi riyal"
  },
  {
    "id": "Save",
    "name": "Save",
    "category": "System",
    "keywords": "save"
  },
  {
    "id": "SaveAll",
    "name": "SaveAll",
    "category": "System",
    "keywords": "save all"
  },
  {
    "id": "SaveOff",
    "name": "SaveOff",
    "category": "System",
    "keywords": "save off"
  },
  {
    "id": "Scale",
    "name": "Scale",
    "category": "General",
    "keywords": "scale"
  },
  {
    "id": "Scale3D",
    "name": "Scale3D",
    "category": "General",
    "keywords": "scale3 d"
  },
  {
    "id": "Scale3d",
    "name": "Scale3d",
    "category": "General",
    "keywords": "scale3d"
  },
  {
    "id": "Scaling",
    "name": "Scaling",
    "category": "General",
    "keywords": "scaling"
  },
  {
    "id": "Scan",
    "name": "Scan",
    "category": "General",
    "keywords": "scan"
  },
  {
    "id": "ScanBarcode",
    "name": "ScanBarcode",
    "category": "System",
    "keywords": "scan barcode"
  },
  {
    "id": "ScanEye",
    "name": "ScanEye",
    "category": "Symbols",
    "keywords": "scan eye"
  },
  {
    "id": "ScanFace",
    "name": "ScanFace",
    "category": "General",
    "keywords": "scan face"
  },
  {
    "id": "ScanHeart",
    "name": "ScanHeart",
    "category": "Design",
    "keywords": "scan heart"
  },
  {
    "id": "ScanLine",
    "name": "ScanLine",
    "category": "General",
    "keywords": "scan line"
  },
  {
    "id": "ScanQrCode",
    "name": "ScanQrCode",
    "category": "System",
    "keywords": "scan qr code"
  },
  {
    "id": "ScanSearch",
    "name": "ScanSearch",
    "category": "Symbols",
    "keywords": "scan search"
  },
  {
    "id": "ScanText",
    "name": "ScanText",
    "category": "General",
    "keywords": "scan text"
  },
  {
    "id": "ScatterChart",
    "name": "ScatterChart",
    "category": "Design",
    "keywords": "scatter chart"
  },
  {
    "id": "School",
    "name": "School",
    "category": "General",
    "keywords": "school"
  },
  {
    "id": "School2",
    "name": "School2",
    "category": "General",
    "keywords": "school2"
  },
  {
    "id": "Scissors",
    "name": "Scissors",
    "category": "Design",
    "keywords": "scissors"
  },
  {
    "id": "ScissorsLineDashed",
    "name": "ScissorsLineDashed",
    "category": "Design",
    "keywords": "scissors line dashed"
  },
  {
    "id": "ScissorsSquare",
    "name": "ScissorsSquare",
    "category": "Design",
    "keywords": "scissors square"
  },
  {
    "id": "ScissorsSquareDashedBottom",
    "name": "ScissorsSquareDashedBottom",
    "category": "Design",
    "keywords": "scissors square dashed bottom"
  },
  {
    "id": "ScreenShare",
    "name": "ScreenShare",
    "category": "Devices",
    "keywords": "screen share"
  },
  {
    "id": "ScreenShareOff",
    "name": "ScreenShareOff",
    "category": "Devices",
    "keywords": "screen share off"
  },
  {
    "id": "Scroll",
    "name": "Scroll",
    "category": "General",
    "keywords": "scroll"
  },
  {
    "id": "ScrollText",
    "name": "ScrollText",
    "category": "General",
    "keywords": "scroll text"
  },
  {
    "id": "Search",
    "name": "Search",
    "category": "Symbols",
    "keywords": "search"
  },
  {
    "id": "SearchCheck",
    "name": "SearchCheck",
    "category": "Symbols",
    "keywords": "search check"
  },
  {
    "id": "SearchCode",
    "name": "SearchCode",
    "category": "System",
    "keywords": "search code"
  },
  {
    "id": "SearchSlash",
    "name": "SearchSlash",
    "category": "Symbols",
    "keywords": "search slash"
  },
  {
    "id": "SearchX",
    "name": "SearchX",
    "category": "Symbols",
    "keywords": "search x"
  },
  {
    "id": "Section",
    "name": "Section",
    "category": "General",
    "keywords": "section"
  },
  {
    "id": "Send",
    "name": "Send",
    "category": "General",
    "keywords": "send"
  },
  {
    "id": "SendHorizonal",
    "name": "SendHorizonal",
    "category": "General",
    "keywords": "send horizonal"
  },
  {
    "id": "SendHorizontal",
    "name": "SendHorizontal",
    "category": "General",
    "keywords": "send horizontal"
  },
  {
    "id": "SendToBack",
    "name": "SendToBack",
    "category": "General",
    "keywords": "send to back"
  },
  {
    "id": "SeparatorHorizontal",
    "name": "SeparatorHorizontal",
    "category": "General",
    "keywords": "separator horizontal"
  },
  {
    "id": "SeparatorVertical",
    "name": "SeparatorVertical",
    "category": "General",
    "keywords": "separator vertical"
  },
  {
    "id": "Server",
    "name": "Server",
    "category": "Devices",
    "keywords": "server"
  },
  {
    "id": "ServerCog",
    "name": "ServerCog",
    "category": "Devices",
    "keywords": "server cog"
  },
  {
    "id": "ServerCrash",
    "name": "ServerCrash",
    "category": "Devices",
    "keywords": "server crash"
  },
  {
    "id": "ServerOff",
    "name": "ServerOff",
    "category": "Devices",
    "keywords": "server off"
  },
  {
    "id": "Settings",
    "name": "Settings",
    "category": "System",
    "keywords": "settings"
  },
  {
    "id": "Settings2",
    "name": "Settings2",
    "category": "System",
    "keywords": "settings2"
  },
  {
    "id": "Shapes",
    "name": "Shapes",
    "category": "Design",
    "keywords": "shapes"
  },
  {
    "id": "Share",
    "name": "Share",
    "category": "Symbols",
    "keywords": "share"
  },
  {
    "id": "Share2",
    "name": "Share2",
    "category": "Symbols",
    "keywords": "share2"
  },
  {
    "id": "Sheet",
    "name": "Sheet",
    "category": "General",
    "keywords": "sheet"
  },
  {
    "id": "Shell",
    "name": "Shell",
    "category": "General",
    "keywords": "shell"
  },
  {
    "id": "Shield",
    "name": "Shield",
    "category": "System",
    "keywords": "shield"
  },
  {
    "id": "ShieldAlert",
    "name": "ShieldAlert",
    "category": "System",
    "keywords": "shield alert"
  },
  {
    "id": "ShieldBan",
    "name": "ShieldBan",
    "category": "System",
    "keywords": "shield ban"
  },
  {
    "id": "ShieldCheck",
    "name": "ShieldCheck",
    "category": "System",
    "keywords": "shield check"
  },
  {
    "id": "ShieldClose",
    "name": "ShieldClose",
    "category": "System",
    "keywords": "shield close"
  },
  {
    "id": "ShieldEllipsis",
    "name": "ShieldEllipsis",
    "category": "System",
    "keywords": "shield ellipsis"
  },
  {
    "id": "ShieldHalf",
    "name": "ShieldHalf",
    "category": "System",
    "keywords": "shield half"
  },
  {
    "id": "ShieldMinus",
    "name": "ShieldMinus",
    "category": "System",
    "keywords": "shield minus"
  },
  {
    "id": "ShieldOff",
    "name": "ShieldOff",
    "category": "System",
    "keywords": "shield off"
  },
  {
    "id": "ShieldPlus",
    "name": "ShieldPlus",
    "category": "System",
    "keywords": "shield plus"
  },
  {
    "id": "ShieldQuestion",
    "name": "ShieldQuestion",
    "category": "System",
    "keywords": "shield question"
  },
  {
    "id": "ShieldQuestionMark",
    "name": "ShieldQuestionMark",
    "category": "System",
    "keywords": "shield question mark"
  },
  {
    "id": "ShieldUser",
    "name": "ShieldUser",
    "category": "System",
    "keywords": "shield user"
  },
  {
    "id": "ShieldX",
    "name": "ShieldX",
    "category": "System",
    "keywords": "shield x"
  },
  {
    "id": "Ship",
    "name": "Ship",
    "category": "General",
    "keywords": "ship"
  },
  {
    "id": "ShipWheel",
    "name": "ShipWheel",
    "category": "General",
    "keywords": "ship wheel"
  },
  {
    "id": "Shirt",
    "name": "Shirt",
    "category": "General",
    "keywords": "shirt"
  },
  {
    "id": "ShoppingBag",
    "name": "ShoppingBag",
    "category": "General",
    "keywords": "shopping bag"
  },
  {
    "id": "ShoppingBasket",
    "name": "ShoppingBasket",
    "category": "General",
    "keywords": "shopping basket"
  },
  {
    "id": "ShoppingCart",
    "name": "ShoppingCart",
    "category": "Design",
    "keywords": "shopping cart"
  },
  {
    "id": "Shovel",
    "name": "Shovel",
    "category": "General",
    "keywords": "shovel"
  },
  {
    "id": "ShowerHead",
    "name": "ShowerHead",
    "category": "General",
    "keywords": "shower head"
  },
  {
    "id": "Shredder",
    "name": "Shredder",
    "category": "General",
    "keywords": "shredder"
  },
  {
    "id": "Shrimp",
    "name": "Shrimp",
    "category": "General",
    "keywords": "shrimp"
  },
  {
    "id": "Shrink",
    "name": "Shrink",
    "category": "General",
    "keywords": "shrink"
  },
  {
    "id": "Shrub",
    "name": "Shrub",
    "category": "General",
    "keywords": "shrub"
  },
  {
    "id": "Shuffle",
    "name": "Shuffle",
    "category": "Navigation",
    "keywords": "shuffle"
  },
  {
    "id": "Sidebar",
    "name": "Sidebar",
    "category": "General",
    "keywords": "sidebar"
  },
  {
    "id": "SidebarClose",
    "name": "SidebarClose",
    "category": "General",
    "keywords": "sidebar close"
  },
  {
    "id": "SidebarOpen",
    "name": "SidebarOpen",
    "category": "Design",
    "keywords": "sidebar open"
  },
  {
    "id": "Sigma",
    "name": "Sigma",
    "category": "General",
    "keywords": "sigma"
  },
  {
    "id": "SigmaSquare",
    "name": "SigmaSquare",
    "category": "General",
    "keywords": "sigma square"
  },
  {
    "id": "Signal",
    "name": "Signal",
    "category": "General",
    "keywords": "signal"
  },
  {
    "id": "SignalHigh",
    "name": "SignalHigh",
    "category": "General",
    "keywords": "signal high"
  },
  {
    "id": "SignalLow",
    "name": "SignalLow",
    "category": "General",
    "keywords": "signal low"
  },
  {
    "id": "SignalMedium",
    "name": "SignalMedium",
    "category": "General",
    "keywords": "signal medium"
  },
  {
    "id": "SignalZero",
    "name": "SignalZero",
    "category": "General",
    "keywords": "signal zero"
  },
  {
    "id": "Signature",
    "name": "Signature",
    "category": "General",
    "keywords": "signature"
  },
  {
    "id": "Signpost",
    "name": "Signpost",
    "category": "General",
    "keywords": "signpost"
  },
  {
    "id": "SignpostBig",
    "name": "SignpostBig",
    "category": "General",
    "keywords": "signpost big"
  },
  {
    "id": "Siren",
    "name": "Siren",
    "category": "General",
    "keywords": "siren"
  },
  {
    "id": "SkipBack",
    "name": "SkipBack",
    "category": "General",
    "keywords": "skip back"
  },
  {
    "id": "SkipForward",
    "name": "SkipForward",
    "category": "General",
    "keywords": "skip forward"
  },
  {
    "id": "Skull",
    "name": "Skull",
    "category": "General",
    "keywords": "skull"
  },
  {
    "id": "Slack",
    "name": "Slack",
    "category": "General",
    "keywords": "slack"
  },
  {
    "id": "Slash",
    "name": "Slash",
    "category": "General",
    "keywords": "slash"
  },
  {
    "id": "SlashSquare",
    "name": "SlashSquare",
    "category": "General",
    "keywords": "slash square"
  },
  {
    "id": "Slice",
    "name": "Slice",
    "category": "General",
    "keywords": "slice"
  },
  {
    "id": "Sliders",
    "name": "Sliders",
    "category": "System",
    "keywords": "sliders"
  },
  {
    "id": "SlidersHorizontal",
    "name": "SlidersHorizontal",
    "category": "System",
    "keywords": "sliders horizontal"
  },
  {
    "id": "SlidersVertical",
    "name": "SlidersVertical",
    "category": "System",
    "keywords": "sliders vertical"
  },
  {
    "id": "Smartphone",
    "name": "Smartphone",
    "category": "Design",
    "keywords": "smartphone"
  },
  {
    "id": "SmartphoneCharging",
    "name": "SmartphoneCharging",
    "category": "Design",
    "keywords": "smartphone charging"
  },
  {
    "id": "SmartphoneNfc",
    "name": "SmartphoneNfc",
    "category": "Design",
    "keywords": "smartphone nfc"
  },
  {
    "id": "Smile",
    "name": "Smile",
    "category": "General",
    "keywords": "smile"
  },
  {
    "id": "SmilePlus",
    "name": "SmilePlus",
    "category": "Symbols",
    "keywords": "smile plus"
  },
  {
    "id": "Snail",
    "name": "Snail",
    "category": "General",
    "keywords": "snail"
  },
  {
    "id": "Snowflake",
    "name": "Snowflake",
    "category": "General",
    "keywords": "snowflake"
  },
  {
    "id": "SoapDispenserDroplet",
    "name": "SoapDispenserDroplet",
    "category": "Design",
    "keywords": "soap dispenser droplet"
  },
  {
    "id": "Sofa",
    "name": "Sofa",
    "category": "General",
    "keywords": "sofa"
  },
  {
    "id": "SortAsc",
    "name": "SortAsc",
    "category": "General",
    "keywords": "sort asc"
  },
  {
    "id": "SortDesc",
    "name": "SortDesc",
    "category": "General",
    "keywords": "sort desc"
  },
  {
    "id": "Soup",
    "name": "Soup",
    "category": "General",
    "keywords": "soup"
  },
  {
    "id": "Space",
    "name": "Space",
    "category": "General",
    "keywords": "space"
  },
  {
    "id": "Spade",
    "name": "Spade",
    "category": "General",
    "keywords": "spade"
  },
  {
    "id": "Sparkle",
    "name": "Sparkle",
    "category": "Design",
    "keywords": "sparkle"
  },
  {
    "id": "Sparkles",
    "name": "Sparkles",
    "category": "Design",
    "keywords": "sparkles"
  },
  {
    "id": "Speaker",
    "name": "Speaker",
    "category": "Media",
    "keywords": "speaker"
  },
  {
    "id": "Speech",
    "name": "Speech",
    "category": "General",
    "keywords": "speech"
  },
  {
    "id": "SpellCheck",
    "name": "SpellCheck",
    "category": "Symbols",
    "keywords": "spell check"
  },
  {
    "id": "SpellCheck2",
    "name": "SpellCheck2",
    "category": "Symbols",
    "keywords": "spell check2"
  },
  {
    "id": "Spline",
    "name": "Spline",
    "category": "General",
    "keywords": "spline"
  },
  {
    "id": "SplinePointer",
    "name": "SplinePointer",
    "category": "General",
    "keywords": "spline pointer"
  },
  {
    "id": "Split",
    "name": "Split",
    "category": "General",
    "keywords": "split"
  },
  {
    "id": "SplitSquareHorizontal",
    "name": "SplitSquareHorizontal",
    "category": "General",
    "keywords": "split square horizontal"
  },
  {
    "id": "SplitSquareVertical",
    "name": "SplitSquareVertical",
    "category": "General",
    "keywords": "split square vertical"
  },
  {
    "id": "Spool",
    "name": "Spool",
    "category": "General",
    "keywords": "spool"
  },
  {
    "id": "Spotlight",
    "name": "Spotlight",
    "category": "General",
    "keywords": "spotlight"
  },
  {
    "id": "SprayCan",
    "name": "SprayCan",
    "category": "General",
    "keywords": "spray can"
  },
  {
    "id": "Sprout",
    "name": "Sprout",
    "category": "General",
    "keywords": "sprout"
  },
  {
    "id": "Square",
    "name": "Square",
    "category": "General",
    "keywords": "square"
  },
  {
    "id": "SquareActivity",
    "name": "SquareActivity",
    "category": "General",
    "keywords": "square activity"
  },
  {
    "id": "SquareArrowDown",
    "name": "SquareArrowDown",
    "category": "Navigation",
    "keywords": "square arrow down"
  },
  {
    "id": "SquareArrowDownLeft",
    "name": "SquareArrowDownLeft",
    "category": "Navigation",
    "keywords": "square arrow down left"
  },
  {
    "id": "SquareArrowDownRight",
    "name": "SquareArrowDownRight",
    "category": "Navigation",
    "keywords": "square arrow down right"
  },
  {
    "id": "SquareArrowLeft",
    "name": "SquareArrowLeft",
    "category": "Navigation",
    "keywords": "square arrow left"
  },
  {
    "id": "SquareArrowOutDownLeft",
    "name": "SquareArrowOutDownLeft",
    "category": "Navigation",
    "keywords": "square arrow out down left"
  },
  {
    "id": "SquareArrowOutDownRight",
    "name": "SquareArrowOutDownRight",
    "category": "Navigation",
    "keywords": "square arrow out down right"
  },
  {
    "id": "SquareArrowOutUpLeft",
    "name": "SquareArrowOutUpLeft",
    "category": "Navigation",
    "keywords": "square arrow out up left"
  },
  {
    "id": "SquareArrowOutUpRight",
    "name": "SquareArrowOutUpRight",
    "category": "Navigation",
    "keywords": "square arrow out up right"
  },
  {
    "id": "SquareArrowRight",
    "name": "SquareArrowRight",
    "category": "Navigation",
    "keywords": "square arrow right"
  },
  {
    "id": "SquareArrowUp",
    "name": "SquareArrowUp",
    "category": "Navigation",
    "keywords": "square arrow up"
  },
  {
    "id": "SquareArrowUpLeft",
    "name": "SquareArrowUpLeft",
    "category": "Navigation",
    "keywords": "square arrow up left"
  },
  {
    "id": "SquareArrowUpRight",
    "name": "SquareArrowUpRight",
    "category": "Navigation",
    "keywords": "square arrow up right"
  },
  {
    "id": "SquareAsterisk",
    "name": "SquareAsterisk",
    "category": "General",
    "keywords": "square asterisk"
  },
  {
    "id": "SquareBottomDashedScissors",
    "name": "SquareBottomDashedScissors",
    "category": "Design",
    "keywords": "square bottom dashed scissors"
  },
  {
    "id": "SquareChartGantt",
    "name": "SquareChartGantt",
    "category": "Design",
    "keywords": "square chart gantt"
  },
  {
    "id": "SquareCheck",
    "name": "SquareCheck",
    "category": "Symbols",
    "keywords": "square check"
  },
  {
    "id": "SquareCheckBig",
    "name": "SquareCheckBig",
    "category": "Symbols",
    "keywords": "square check big"
  },
  {
    "id": "SquareChevronDown",
    "name": "SquareChevronDown",
    "category": "Navigation",
    "keywords": "square chevron down"
  },
  {
    "id": "SquareChevronLeft",
    "name": "SquareChevronLeft",
    "category": "Navigation",
    "keywords": "square chevron left"
  },
  {
    "id": "SquareChevronRight",
    "name": "SquareChevronRight",
    "category": "Navigation",
    "keywords": "square chevron right"
  },
  {
    "id": "SquareChevronUp",
    "name": "SquareChevronUp",
    "category": "Navigation",
    "keywords": "square chevron up"
  },
  {
    "id": "SquareCode",
    "name": "SquareCode",
    "category": "System",
    "keywords": "square code"
  },
  {
    "id": "SquareDashed",
    "name": "SquareDashed",
    "category": "General",
    "keywords": "square dashed"
  },
  {
    "id": "SquareDashedBottom",
    "name": "SquareDashedBottom",
    "category": "General",
    "keywords": "square dashed bottom"
  },
  {
    "id": "SquareDashedBottomCode",
    "name": "SquareDashedBottomCode",
    "category": "System",
    "keywords": "square dashed bottom code"
  },
  {
    "id": "SquareDashedKanban",
    "name": "SquareDashedKanban",
    "category": "General",
    "keywords": "square dashed kanban"
  },
  {
    "id": "SquareDashedMousePointer",
    "name": "SquareDashedMousePointer",
    "category": "Devices",
    "keywords": "square dashed mouse pointer"
  },
  {
    "id": "SquareDashedTopSolid",
    "name": "SquareDashedTopSolid",
    "category": "General",
    "keywords": "square dashed top solid"
  },
  {
    "id": "SquareDivide",
    "name": "SquareDivide",
    "category": "General",
    "keywords": "square divide"
  },
  {
    "id": "SquareDot",
    "name": "SquareDot",
    "category": "Navigation",
    "keywords": "square dot"
  },
  {
    "id": "SquareEqual",
    "name": "SquareEqual",
    "category": "General",
    "keywords": "square equal"
  },
  {
    "id": "SquareFunction",
    "name": "SquareFunction",
    "category": "General",
    "keywords": "square function"
  },
  {
    "id": "SquareGanttChart",
    "name": "SquareGanttChart",
    "category": "Design",
    "keywords": "square gantt chart"
  },
  {
    "id": "SquareKanban",
    "name": "SquareKanban",
    "category": "General",
    "keywords": "square kanban"
  },
  {
    "id": "SquareLibrary",
    "name": "SquareLibrary",
    "category": "General",
    "keywords": "square library"
  },
  {
    "id": "SquareM",
    "name": "SquareM",
    "category": "General",
    "keywords": "square m"
  },
  {
    "id": "SquareMenu",
    "name": "SquareMenu",
    "category": "General",
    "keywords": "square menu"
  },
  {
    "id": "SquareMinus",
    "name": "SquareMinus",
    "category": "Symbols",
    "keywords": "square minus"
  },
  {
    "id": "SquareMousePointer",
    "name": "SquareMousePointer",
    "category": "Devices",
    "keywords": "square mouse pointer"
  },
  {
    "id": "SquareParking",
    "name": "SquareParking",
    "category": "General",
    "keywords": "square parking"
  },
  {
    "id": "SquareParkingOff",
    "name": "SquareParkingOff",
    "category": "General",
    "keywords": "square parking off"
  },
  {
    "id": "SquarePause",
    "name": "SquarePause",
    "category": "Media",
    "keywords": "square pause"
  },
  {
    "id": "SquarePen",
    "name": "SquarePen",
    "category": "Design",
    "keywords": "square pen"
  },
  {
    "id": "SquarePercent",
    "name": "SquarePercent",
    "category": "General",
    "keywords": "square percent"
  },
  {
    "id": "SquarePi",
    "name": "SquarePi",
    "category": "General",
    "keywords": "square pi"
  },
  {
    "id": "SquarePilcrow",
    "name": "SquarePilcrow",
    "category": "General",
    "keywords": "square pilcrow"
  },
  {
    "id": "SquarePlay",
    "name": "SquarePlay",
    "category": "Media",
    "keywords": "square play"
  },
  {
    "id": "SquarePlus",
    "name": "SquarePlus",
    "category": "Symbols",
    "keywords": "square plus"
  },
  {
    "id": "SquarePower",
    "name": "SquarePower",
    "category": "Devices",
    "keywords": "square power"
  },
  {
    "id": "SquareRadical",
    "name": "SquareRadical",
    "category": "General",
    "keywords": "square radical"
  },
  {
    "id": "SquareRoundCorner",
    "name": "SquareRoundCorner",
    "category": "Navigation",
    "keywords": "square round corner"
  },
  {
    "id": "SquareScissors",
    "name": "SquareScissors",
    "category": "Design",
    "keywords": "square scissors"
  },
  {
    "id": "SquareSigma",
    "name": "SquareSigma",
    "category": "General",
    "keywords": "square sigma"
  },
  {
    "id": "SquareSlash",
    "name": "SquareSlash",
    "category": "General",
    "keywords": "square slash"
  },
  {
    "id": "SquareSplitHorizontal",
    "name": "SquareSplitHorizontal",
    "category": "General",
    "keywords": "square split horizontal"
  },
  {
    "id": "SquareSplitVertical",
    "name": "SquareSplitVertical",
    "category": "Media",
    "keywords": "square split vertical"
  },
  {
    "id": "SquareSquare",
    "name": "SquareSquare",
    "category": "General",
    "keywords": "square square"
  },
  {
    "id": "SquareStack",
    "name": "SquareStack",
    "category": "General",
    "keywords": "square stack"
  },
  {
    "id": "SquareStar",
    "name": "SquareStar",
    "category": "Symbols",
    "keywords": "square star"
  },
  {
    "id": "SquareStop",
    "name": "SquareStop",
    "category": "General",
    "keywords": "square stop"
  },
  {
    "id": "SquareTerminal",
    "name": "SquareTerminal",
    "category": "System",
    "keywords": "square terminal"
  },
  {
    "id": "SquareUser",
    "name": "SquareUser",
    "category": "Symbols",
    "keywords": "square user"
  },
  {
    "id": "SquareUserRound",
    "name": "SquareUserRound",
    "category": "Symbols",
    "keywords": "square user round"
  },
  {
    "id": "SquareX",
    "name": "SquareX",
    "category": "General",
    "keywords": "square x"
  },
  {
    "id": "SquaresExclude",
    "name": "SquaresExclude",
    "category": "General",
    "keywords": "squares exclude"
  },
  {
    "id": "SquaresIntersect",
    "name": "SquaresIntersect",
    "category": "General",
    "keywords": "squares intersect"
  },
  {
    "id": "SquaresSubtract",
    "name": "SquaresSubtract",
    "category": "General",
    "keywords": "squares subtract"
  },
  {
    "id": "SquaresUnite",
    "name": "SquaresUnite",
    "category": "Symbols",
    "keywords": "squares unite"
  },
  {
    "id": "Squircle",
    "name": "Squircle",
    "category": "General",
    "keywords": "squircle"
  },
  {
    "id": "SquircleDashed",
    "name": "SquircleDashed",
    "category": "General",
    "keywords": "squircle dashed"
  },
  {
    "id": "Squirrel",
    "name": "Squirrel",
    "category": "General",
    "keywords": "squirrel"
  },
  {
    "id": "Stamp",
    "name": "Stamp",
    "category": "Design",
    "keywords": "stamp"
  },
  {
    "id": "Star",
    "name": "Star",
    "category": "Symbols",
    "keywords": "star"
  },
  {
    "id": "StarHalf",
    "name": "StarHalf",
    "category": "Symbols",
    "keywords": "star half"
  },
  {
    "id": "StarOff",
    "name": "StarOff",
    "category": "Symbols",
    "keywords": "star off"
  },
  {
    "id": "Stars",
    "name": "Stars",
    "category": "Symbols",
    "keywords": "stars"
  },
  {
    "id": "StepBack",
    "name": "StepBack",
    "category": "General",
    "keywords": "step back"
  },
  {
    "id": "StepForward",
    "name": "StepForward",
    "category": "General",
    "keywords": "step forward"
  },
  {
    "id": "Stethoscope",
    "name": "Stethoscope",
    "category": "General",
    "keywords": "stethoscope"
  },
  {
    "id": "Sticker",
    "name": "Sticker",
    "category": "General",
    "keywords": "sticker"
  },
  {
    "id": "StickyNote",
    "name": "StickyNote",
    "category": "General",
    "keywords": "sticky note"
  },
  {
    "id": "StopCircle",
    "name": "StopCircle",
    "category": "General",
    "keywords": "stop circle"
  },
  {
    "id": "Store",
    "name": "Store",
    "category": "General",
    "keywords": "store"
  },
  {
    "id": "StretchHorizontal",
    "name": "StretchHorizontal",
    "category": "General",
    "keywords": "stretch horizontal"
  },
  {
    "id": "StretchVertical",
    "name": "StretchVertical",
    "category": "General",
    "keywords": "stretch vertical"
  },
  {
    "id": "Strikethrough",
    "name": "Strikethrough",
    "category": "General",
    "keywords": "strikethrough"
  },
  {
    "id": "Subscript",
    "name": "Subscript",
    "category": "General",
    "keywords": "subscript"
  },
  {
    "id": "Subtitles",
    "name": "Subtitles",
    "category": "General",
    "keywords": "subtitles"
  },
  {
    "id": "Sun",
    "name": "Sun",
    "category": "Symbols",
    "keywords": "sun"
  },
  {
    "id": "SunDim",
    "name": "SunDim",
    "category": "Symbols",
    "keywords": "sun dim"
  },
  {
    "id": "SunMedium",
    "name": "SunMedium",
    "category": "Symbols",
    "keywords": "sun medium"
  },
  {
    "id": "SunMoon",
    "name": "SunMoon",
    "category": "Symbols",
    "keywords": "sun moon"
  },
  {
    "id": "SunSnow",
    "name": "SunSnow",
    "category": "Symbols",
    "keywords": "sun snow"
  },
  {
    "id": "Sunrise",
    "name": "Sunrise",
    "category": "Symbols",
    "keywords": "sunrise"
  },
  {
    "id": "Sunset",
    "name": "Sunset",
    "category": "Symbols",
    "keywords": "sunset"
  },
  {
    "id": "Superscript",
    "name": "Superscript",
    "category": "General",
    "keywords": "superscript"
  },
  {
    "id": "SwatchBook",
    "name": "SwatchBook",
    "category": "Devices",
    "keywords": "swatch book"
  },
  {
    "id": "SwissFranc",
    "name": "SwissFranc",
    "category": "General",
    "keywords": "swiss franc"
  },
  {
    "id": "SwitchCamera",
    "name": "SwitchCamera",
    "category": "System",
    "keywords": "switch camera"
  },
  {
    "id": "Sword",
    "name": "Sword",
    "category": "General",
    "keywords": "sword"
  },
  {
    "id": "Swords",
    "name": "Swords",
    "category": "General",
    "keywords": "swords"
  },
  {
    "id": "Syringe",
    "name": "Syringe",
    "category": "General",
    "keywords": "syringe"
  },
  {
    "id": "Table",
    "name": "Table",
    "category": "General",
    "keywords": "table"
  },
  {
    "id": "Table2",
    "name": "Table2",
    "category": "General",
    "keywords": "table2"
  },
  {
    "id": "TableCellsMerge",
    "name": "TableCellsMerge",
    "category": "General",
    "keywords": "table cells merge"
  },
  {
    "id": "TableCellsSplit",
    "name": "TableCellsSplit",
    "category": "General",
    "keywords": "table cells split"
  },
  {
    "id": "TableColumnsSplit",
    "name": "TableColumnsSplit",
    "category": "General",
    "keywords": "table columns split"
  },
  {
    "id": "TableConfig",
    "name": "TableConfig",
    "category": "General",
    "keywords": "table config"
  },
  {
    "id": "TableOfContents",
    "name": "TableOfContents",
    "category": "General",
    "keywords": "table of contents"
  },
  {
    "id": "TableProperties",
    "name": "TableProperties",
    "category": "General",
    "keywords": "table properties"
  },
  {
    "id": "TableRowsSplit",
    "name": "TableRowsSplit",
    "category": "General",
    "keywords": "table rows split"
  },
  {
    "id": "Tablet",
    "name": "Tablet",
    "category": "Devices",
    "keywords": "tablet"
  },
  {
    "id": "TabletSmartphone",
    "name": "TabletSmartphone",
    "category": "Design",
    "keywords": "tablet smartphone"
  },
  {
    "id": "Tablets",
    "name": "Tablets",
    "category": "Devices",
    "keywords": "tablets"
  },
  {
    "id": "Tag",
    "name": "Tag",
    "category": "Symbols",
    "keywords": "tag"
  },
  {
    "id": "Tags",
    "name": "Tags",
    "category": "Symbols",
    "keywords": "tags"
  },
  {
    "id": "Tally1",
    "name": "Tally1",
    "category": "General",
    "keywords": "tally1"
  },
  {
    "id": "Tally2",
    "name": "Tally2",
    "category": "General",
    "keywords": "tally2"
  },
  {
    "id": "Tally3",
    "name": "Tally3",
    "category": "General",
    "keywords": "tally3"
  },
  {
    "id": "Tally4",
    "name": "Tally4",
    "category": "General",
    "keywords": "tally4"
  },
  {
    "id": "Tally5",
    "name": "Tally5",
    "category": "General",
    "keywords": "tally5"
  },
  {
    "id": "Tangent",
    "name": "Tangent",
    "category": "General",
    "keywords": "tangent"
  },
  {
    "id": "Target",
    "name": "Target",
    "category": "General",
    "keywords": "target"
  },
  {
    "id": "Telescope",
    "name": "Telescope",
    "category": "General",
    "keywords": "telescope"
  },
  {
    "id": "Tent",
    "name": "Tent",
    "category": "General",
    "keywords": "tent"
  },
  {
    "id": "TentTree",
    "name": "TentTree",
    "category": "General",
    "keywords": "tent tree"
  },
  {
    "id": "Terminal",
    "name": "Terminal",
    "category": "System",
    "keywords": "terminal"
  },
  {
    "id": "TerminalSquare",
    "name": "TerminalSquare",
    "category": "System",
    "keywords": "terminal square"
  },
  {
    "id": "TestTube",
    "name": "TestTube",
    "category": "General",
    "keywords": "test tube"
  },
  {
    "id": "TestTube2",
    "name": "TestTube2",
    "category": "General",
    "keywords": "test tube2"
  },
  {
    "id": "TestTubeDiagonal",
    "name": "TestTubeDiagonal",
    "category": "General",
    "keywords": "test tube diagonal"
  },
  {
    "id": "TestTubes",
    "name": "TestTubes",
    "category": "General",
    "keywords": "test tubes"
  },
  {
    "id": "Text",
    "name": "Text",
    "category": "General",
    "keywords": "text"
  },
  {
    "id": "TextAlignCenter",
    "name": "TextAlignCenter",
    "category": "General",
    "keywords": "text align center"
  },
  {
    "id": "TextAlignEnd",
    "name": "TextAlignEnd",
    "category": "General",
    "keywords": "text align end"
  },
  {
    "id": "TextAlignJustify",
    "name": "TextAlignJustify",
    "category": "General",
    "keywords": "text align justify"
  },
  {
    "id": "TextAlignStart",
    "name": "TextAlignStart",
    "category": "Design",
    "keywords": "text align start"
  },
  {
    "id": "TextCursor",
    "name": "TextCursor",
    "category": "General",
    "keywords": "text cursor"
  },
  {
    "id": "TextCursorInput",
    "name": "TextCursorInput",
    "category": "General",
    "keywords": "text cursor input"
  },
  {
    "id": "TextInitial",
    "name": "TextInitial",
    "category": "General",
    "keywords": "text initial"
  },
  {
    "id": "TextQuote",
    "name": "TextQuote",
    "category": "General",
    "keywords": "text quote"
  },
  {
    "id": "TextSearch",
    "name": "TextSearch",
    "category": "Symbols",
    "keywords": "text search"
  },
  {
    "id": "TextSelect",
    "name": "TextSelect",
    "category": "General",
    "keywords": "text select"
  },
  {
    "id": "TextSelection",
    "name": "TextSelection",
    "category": "General",
    "keywords": "text selection"
  },
  {
    "id": "TextWrap",
    "name": "TextWrap",
    "category": "General",
    "keywords": "text wrap"
  },
  {
    "id": "Theater",
    "name": "Theater",
    "category": "General",
    "keywords": "theater"
  },
  {
    "id": "Thermometer",
    "name": "Thermometer",
    "category": "General",
    "keywords": "thermometer"
  },
  {
    "id": "ThermometerSnowflake",
    "name": "ThermometerSnowflake",
    "category": "General",
    "keywords": "thermometer snowflake"
  },
  {
    "id": "ThermometerSun",
    "name": "ThermometerSun",
    "category": "Symbols",
    "keywords": "thermometer sun"
  },
  {
    "id": "ThumbsDown",
    "name": "ThumbsDown",
    "category": "General",
    "keywords": "thumbs down"
  },
  {
    "id": "ThumbsUp",
    "name": "ThumbsUp",
    "category": "General",
    "keywords": "thumbs up"
  },
  {
    "id": "Ticket",
    "name": "Ticket",
    "category": "General",
    "keywords": "ticket"
  },
  {
    "id": "TicketCheck",
    "name": "TicketCheck",
    "category": "Symbols",
    "keywords": "ticket check"
  },
  {
    "id": "TicketMinus",
    "name": "TicketMinus",
    "category": "Symbols",
    "keywords": "ticket minus"
  },
  {
    "id": "TicketPercent",
    "name": "TicketPercent",
    "category": "General",
    "keywords": "ticket percent"
  },
  {
    "id": "TicketPlus",
    "name": "TicketPlus",
    "category": "Symbols",
    "keywords": "ticket plus"
  },
  {
    "id": "TicketSlash",
    "name": "TicketSlash",
    "category": "General",
    "keywords": "ticket slash"
  },
  {
    "id": "TicketX",
    "name": "TicketX",
    "category": "General",
    "keywords": "ticket x"
  },
  {
    "id": "Tickets",
    "name": "Tickets",
    "category": "General",
    "keywords": "tickets"
  },
  {
    "id": "TicketsPlane",
    "name": "TicketsPlane",
    "category": "General",
    "keywords": "tickets plane"
  },
  {
    "id": "Timer",
    "name": "Timer",
    "category": "General",
    "keywords": "timer"
  },
  {
    "id": "TimerOff",
    "name": "TimerOff",
    "category": "General",
    "keywords": "timer off"
  },
  {
    "id": "TimerReset",
    "name": "TimerReset",
    "category": "General",
    "keywords": "timer reset"
  },
  {
    "id": "ToggleLeft",
    "name": "ToggleLeft",
    "category": "System",
    "keywords": "toggle left"
  },
  {
    "id": "ToggleRight",
    "name": "ToggleRight",
    "category": "System",
    "keywords": "toggle right"
  },
  {
    "id": "Toilet",
    "name": "Toilet",
    "category": "General",
    "keywords": "toilet"
  },
  {
    "id": "ToolCase",
    "name": "ToolCase",
    "category": "System",
    "keywords": "tool case"
  },
  {
    "id": "Tornado",
    "name": "Tornado",
    "category": "General",
    "keywords": "tornado"
  },
  {
    "id": "Torus",
    "name": "Torus",
    "category": "General",
    "keywords": "torus"
  },
  {
    "id": "Touchpad",
    "name": "Touchpad",
    "category": "General",
    "keywords": "touchpad"
  },
  {
    "id": "TouchpadOff",
    "name": "TouchpadOff",
    "category": "General",
    "keywords": "touchpad off"
  },
  {
    "id": "TowerControl",
    "name": "TowerControl",
    "category": "General",
    "keywords": "tower control"
  },
  {
    "id": "ToyBrick",
    "name": "ToyBrick",
    "category": "General",
    "keywords": "toy brick"
  },
  {
    "id": "Tractor",
    "name": "Tractor",
    "category": "General",
    "keywords": "tractor"
  },
  {
    "id": "TrafficCone",
    "name": "TrafficCone",
    "category": "General",
    "keywords": "traffic cone"
  },
  {
    "id": "Train",
    "name": "Train",
    "category": "General",
    "keywords": "train"
  },
  {
    "id": "TrainFront",
    "name": "TrainFront",
    "category": "General",
    "keywords": "train front"
  },
  {
    "id": "TrainFrontTunnel",
    "name": "TrainFrontTunnel",
    "category": "General",
    "keywords": "train front tunnel"
  },
  {
    "id": "TrainTrack",
    "name": "TrainTrack",
    "category": "General",
    "keywords": "train track"
  },
  {
    "id": "TramFront",
    "name": "TramFront",
    "category": "General",
    "keywords": "tram front"
  },
  {
    "id": "Transgender",
    "name": "Transgender",
    "category": "General",
    "keywords": "transgender"
  },
  {
    "id": "Trash",
    "name": "Trash",
    "category": "General",
    "keywords": "trash"
  },
  {
    "id": "Trash2",
    "name": "Trash2",
    "category": "General",
    "keywords": "trash2"
  },
  {
    "id": "TreeDeciduous",
    "name": "TreeDeciduous",
    "category": "General",
    "keywords": "tree deciduous"
  },
  {
    "id": "TreePalm",
    "name": "TreePalm",
    "category": "General",
    "keywords": "tree palm"
  },
  {
    "id": "TreePine",
    "name": "TreePine",
    "category": "General",
    "keywords": "tree pine"
  },
  {
    "id": "Trees",
    "name": "Trees",
    "category": "General",
    "keywords": "trees"
  },
  {
    "id": "Trello",
    "name": "Trello",
    "category": "General",
    "keywords": "trello"
  },
  {
    "id": "TrendingDown",
    "name": "TrendingDown",
    "category": "General",
    "keywords": "trending down"
  },
  {
    "id": "TrendingUp",
    "name": "TrendingUp",
    "category": "General",
    "keywords": "trending up"
  },
  {
    "id": "TrendingUpDown",
    "name": "TrendingUpDown",
    "category": "General",
    "keywords": "trending up down"
  },
  {
    "id": "Triangle",
    "name": "Triangle",
    "category": "General",
    "keywords": "triangle"
  },
  {
    "id": "TriangleAlert",
    "name": "TriangleAlert",
    "category": "Symbols",
    "keywords": "triangle alert"
  },
  {
    "id": "TriangleDashed",
    "name": "TriangleDashed",
    "category": "General",
    "keywords": "triangle dashed"
  },
  {
    "id": "TriangleRight",
    "name": "TriangleRight",
    "category": "General",
    "keywords": "triangle right"
  },
  {
    "id": "Trophy",
    "name": "Trophy",
    "category": "General",
    "keywords": "trophy"
  },
  {
    "id": "Truck",
    "name": "Truck",
    "category": "General",
    "keywords": "truck"
  },
  {
    "id": "TruckElectric",
    "name": "TruckElectric",
    "category": "General",
    "keywords": "truck electric"
  },
  {
    "id": "TurkishLira",
    "name": "TurkishLira",
    "category": "General",
    "keywords": "turkish lira"
  },
  {
    "id": "Turntable",
    "name": "Turntable",
    "category": "General",
    "keywords": "turntable"
  },
  {
    "id": "Turtle",
    "name": "Turtle",
    "category": "General",
    "keywords": "turtle"
  },
  {
    "id": "Tv",
    "name": "Tv",
    "category": "Media",
    "keywords": "tv"
  },
  {
    "id": "Tv2",
    "name": "Tv2",
    "category": "Media",
    "keywords": "tv2"
  },
  {
    "id": "TvMinimal",
    "name": "TvMinimal",
    "category": "Media",
    "keywords": "tv minimal"
  },
  {
    "id": "TvMinimalPlay",
    "name": "TvMinimalPlay",
    "category": "Media",
    "keywords": "tv minimal play"
  },
  {
    "id": "Twitch",
    "name": "Twitch",
    "category": "General",
    "keywords": "twitch"
  },
  {
    "id": "Twitter",
    "name": "Twitter",
    "category": "General",
    "keywords": "twitter"
  },
  {
    "id": "Type",
    "name": "Type",
    "category": "General",
    "keywords": "type"
  },
  {
    "id": "TypeOutline",
    "name": "TypeOutline",
    "category": "General",
    "keywords": "type outline"
  },
  {
    "id": "Umbrella",
    "name": "Umbrella",
    "category": "General",
    "keywords": "umbrella"
  },
  {
    "id": "UmbrellaOff",
    "name": "UmbrellaOff",
    "category": "General",
    "keywords": "umbrella off"
  },
  {
    "id": "Underline",
    "name": "Underline",
    "category": "General",
    "keywords": "underline"
  },
  {
    "id": "Undo",
    "name": "Undo",
    "category": "Navigation",
    "keywords": "undo"
  },
  {
    "id": "Undo2",
    "name": "Undo2",
    "category": "Navigation",
    "keywords": "undo2"
  },
  {
    "id": "UndoDot",
    "name": "UndoDot",
    "category": "Navigation",
    "keywords": "undo dot"
  },
  {
    "id": "UnfoldHorizontal",
    "name": "UnfoldHorizontal",
    "category": "General",
    "keywords": "unfold horizontal"
  },
  {
    "id": "UnfoldVertical",
    "name": "UnfoldVertical",
    "category": "General",
    "keywords": "unfold vertical"
  },
  {
    "id": "Ungroup",
    "name": "Ungroup",
    "category": "General",
    "keywords": "ungroup"
  },
  {
    "id": "University",
    "name": "University",
    "category": "General",
    "keywords": "university"
  },
  {
    "id": "Unlink",
    "name": "Unlink",
    "category": "Symbols",
    "keywords": "unlink"
  },
  {
    "id": "Unlink2",
    "name": "Unlink2",
    "category": "Symbols",
    "keywords": "unlink2"
  },
  {
    "id": "Unlock",
    "name": "Unlock",
    "category": "System",
    "keywords": "unlock"
  },
  {
    "id": "UnlockKeyhole",
    "name": "UnlockKeyhole",
    "category": "System",
    "keywords": "unlock keyhole"
  },
  {
    "id": "Unplug",
    "name": "Unplug",
    "category": "General",
    "keywords": "unplug"
  },
  {
    "id": "Upload",
    "name": "Upload",
    "category": "General",
    "keywords": "upload"
  },
  {
    "id": "UploadCloud",
    "name": "UploadCloud",
    "category": "Symbols",
    "keywords": "upload cloud"
  },
  {
    "id": "Usb",
    "name": "Usb",
    "category": "Devices",
    "keywords": "usb"
  },
  {
    "id": "User",
    "name": "User",
    "category": "Symbols",
    "keywords": "user"
  },
  {
    "id": "User2",
    "name": "User2",
    "category": "Symbols",
    "keywords": "user2"
  },
  {
    "id": "UserCheck",
    "name": "UserCheck",
    "category": "Symbols",
    "keywords": "user check"
  },
  {
    "id": "UserCheck2",
    "name": "UserCheck2",
    "category": "Symbols",
    "keywords": "user check2"
  },
  {
    "id": "UserCircle",
    "name": "UserCircle",
    "category": "Symbols",
    "keywords": "user circle"
  },
  {
    "id": "UserCircle2",
    "name": "UserCircle2",
    "category": "Symbols",
    "keywords": "user circle2"
  },
  {
    "id": "UserCog",
    "name": "UserCog",
    "category": "Symbols",
    "keywords": "user cog"
  },
  {
    "id": "UserCog2",
    "name": "UserCog2",
    "category": "Symbols",
    "keywords": "user cog2"
  },
  {
    "id": "UserLock",
    "name": "UserLock",
    "category": "System",
    "keywords": "user lock"
  },
  {
    "id": "UserMinus",
    "name": "UserMinus",
    "category": "Symbols",
    "keywords": "user minus"
  },
  {
    "id": "UserMinus2",
    "name": "UserMinus2",
    "category": "Symbols",
    "keywords": "user minus2"
  },
  {
    "id": "UserPen",
    "name": "UserPen",
    "category": "Design",
    "keywords": "user pen"
  },
  {
    "id": "UserPlus",
    "name": "UserPlus",
    "category": "Symbols",
    "keywords": "user plus"
  },
  {
    "id": "UserPlus2",
    "name": "UserPlus2",
    "category": "Symbols",
    "keywords": "user plus2"
  },
  {
    "id": "UserRound",
    "name": "UserRound",
    "category": "Symbols",
    "keywords": "user round"
  },
  {
    "id": "UserRoundCheck",
    "name": "UserRoundCheck",
    "category": "Symbols",
    "keywords": "user round check"
  },
  {
    "id": "UserRoundCog",
    "name": "UserRoundCog",
    "category": "Symbols",
    "keywords": "user round cog"
  },
  {
    "id": "UserRoundMinus",
    "name": "UserRoundMinus",
    "category": "Symbols",
    "keywords": "user round minus"
  },
  {
    "id": "UserRoundPen",
    "name": "UserRoundPen",
    "category": "Design",
    "keywords": "user round pen"
  },
  {
    "id": "UserRoundPlus",
    "name": "UserRoundPlus",
    "category": "Symbols",
    "keywords": "user round plus"
  },
  {
    "id": "UserRoundSearch",
    "name": "UserRoundSearch",
    "category": "Symbols",
    "keywords": "user round search"
  },
  {
    "id": "UserRoundX",
    "name": "UserRoundX",
    "category": "Symbols",
    "keywords": "user round x"
  },
  {
    "id": "UserSearch",
    "name": "UserSearch",
    "category": "Symbols",
    "keywords": "user search"
  },
  {
    "id": "UserSquare",
    "name": "UserSquare",
    "category": "Symbols",
    "keywords": "user square"
  },
  {
    "id": "UserSquare2",
    "name": "UserSquare2",
    "category": "Symbols",
    "keywords": "user square2"
  },
  {
    "id": "UserStar",
    "name": "UserStar",
    "category": "Symbols",
    "keywords": "user star"
  },
  {
    "id": "UserX",
    "name": "UserX",
    "category": "Symbols",
    "keywords": "user x"
  },
  {
    "id": "UserX2",
    "name": "UserX2",
    "category": "Symbols",
    "keywords": "user x2"
  },
  {
    "id": "Users",
    "name": "Users",
    "category": "Symbols",
    "keywords": "users"
  },
  {
    "id": "Users2",
    "name": "Users2",
    "category": "Symbols",
    "keywords": "users2"
  },
  {
    "id": "UsersRound",
    "name": "UsersRound",
    "category": "Symbols",
    "keywords": "users round"
  },
  {
    "id": "Utensils",
    "name": "Utensils",
    "category": "General",
    "keywords": "utensils"
  },
  {
    "id": "UtensilsCrossed",
    "name": "UtensilsCrossed",
    "category": "Symbols",
    "keywords": "utensils crossed"
  },
  {
    "id": "UtilityPole",
    "name": "UtilityPole",
    "category": "General",
    "keywords": "utility pole"
  },
  {
    "id": "Variable",
    "name": "Variable",
    "category": "General",
    "keywords": "variable"
  },
  {
    "id": "Vault",
    "name": "Vault",
    "category": "General",
    "keywords": "vault"
  },
  {
    "id": "VectorSquare",
    "name": "VectorSquare",
    "category": "General",
    "keywords": "vector square"
  },
  {
    "id": "Vegan",
    "name": "Vegan",
    "category": "General",
    "keywords": "vegan"
  },
  {
    "id": "VenetianMask",
    "name": "VenetianMask",
    "category": "General",
    "keywords": "venetian mask"
  },
  {
    "id": "Venus",
    "name": "Venus",
    "category": "General",
    "keywords": "venus"
  },
  {
    "id": "VenusAndMars",
    "name": "VenusAndMars",
    "category": "General",
    "keywords": "venus and mars"
  },
  {
    "id": "Verified",
    "name": "Verified",
    "category": "General",
    "keywords": "verified"
  },
  {
    "id": "Vibrate",
    "name": "Vibrate",
    "category": "General",
    "keywords": "vibrate"
  },
  {
    "id": "VibrateOff",
    "name": "VibrateOff",
    "category": "General",
    "keywords": "vibrate off"
  },
  {
    "id": "Video",
    "name": "Video",
    "category": "Media",
    "keywords": "video"
  },
  {
    "id": "VideoOff",
    "name": "VideoOff",
    "category": "Media",
    "keywords": "video off"
  },
  {
    "id": "Videotape",
    "name": "Videotape",
    "category": "Media",
    "keywords": "videotape"
  },
  {
    "id": "View",
    "name": "View",
    "category": "General",
    "keywords": "view"
  },
  {
    "id": "Voicemail",
    "name": "Voicemail",
    "category": "General",
    "keywords": "voicemail"
  },
  {
    "id": "Volleyball",
    "name": "Volleyball",
    "category": "General",
    "keywords": "volleyball"
  },
  {
    "id": "Volume",
    "name": "Volume",
    "category": "Media",
    "keywords": "volume"
  },
  {
    "id": "Volume1",
    "name": "Volume1",
    "category": "Media",
    "keywords": "volume1"
  },
  {
    "id": "Volume2",
    "name": "Volume2",
    "category": "Media",
    "keywords": "volume2"
  },
  {
    "id": "VolumeOff",
    "name": "VolumeOff",
    "category": "Media",
    "keywords": "volume off"
  },
  {
    "id": "VolumeX",
    "name": "VolumeX",
    "category": "Media",
    "keywords": "volume x"
  },
  {
    "id": "Vote",
    "name": "Vote",
    "category": "General",
    "keywords": "vote"
  },
  {
    "id": "Wallet",
    "name": "Wallet",
    "category": "General",
    "keywords": "wallet"
  },
  {
    "id": "Wallet2",
    "name": "Wallet2",
    "category": "General",
    "keywords": "wallet2"
  },
  {
    "id": "WalletCards",
    "name": "WalletCards",
    "category": "General",
    "keywords": "wallet cards"
  },
  {
    "id": "WalletMinimal",
    "name": "WalletMinimal",
    "category": "General",
    "keywords": "wallet minimal"
  },
  {
    "id": "Wallpaper",
    "name": "Wallpaper",
    "category": "General",
    "keywords": "wallpaper"
  },
  {
    "id": "Wand",
    "name": "Wand",
    "category": "Design",
    "keywords": "wand"
  },
  {
    "id": "Wand2",
    "name": "Wand2",
    "category": "Design",
    "keywords": "wand2"
  },
  {
    "id": "WandSparkles",
    "name": "WandSparkles",
    "category": "Design",
    "keywords": "wand sparkles"
  },
  {
    "id": "Warehouse",
    "name": "Warehouse",
    "category": "General",
    "keywords": "warehouse"
  },
  {
    "id": "WashingMachine",
    "name": "WashingMachine",
    "category": "General",
    "keywords": "washing machine"
  },
  {
    "id": "Watch",
    "name": "Watch",
    "category": "Devices",
    "keywords": "watch"
  },
  {
    "id": "Waves",
    "name": "Waves",
    "category": "General",
    "keywords": "waves"
  },
  {
    "id": "WavesLadder",
    "name": "WavesLadder",
    "category": "General",
    "keywords": "waves ladder"
  },
  {
    "id": "Waypoints",
    "name": "Waypoints",
    "category": "General",
    "keywords": "waypoints"
  },
  {
    "id": "Webcam",
    "name": "Webcam",
    "category": "General",
    "keywords": "webcam"
  },
  {
    "id": "Webhook",
    "name": "Webhook",
    "category": "General",
    "keywords": "webhook"
  },
  {
    "id": "WebhookOff",
    "name": "WebhookOff",
    "category": "General",
    "keywords": "webhook off"
  },
  {
    "id": "Weight",
    "name": "Weight",
    "category": "General",
    "keywords": "weight"
  },
  {
    "id": "Wheat",
    "name": "Wheat",
    "category": "General",
    "keywords": "wheat"
  },
  {
    "id": "WheatOff",
    "name": "WheatOff",
    "category": "General",
    "keywords": "wheat off"
  },
  {
    "id": "WholeWord",
    "name": "WholeWord",
    "category": "General",
    "keywords": "whole word"
  },
  {
    "id": "Wifi",
    "name": "Wifi",
    "category": "Devices",
    "keywords": "wifi"
  },
  {
    "id": "WifiCog",
    "name": "WifiCog",
    "category": "Devices",
    "keywords": "wifi cog"
  },
  {
    "id": "WifiHigh",
    "name": "WifiHigh",
    "category": "Devices",
    "keywords": "wifi high"
  },
  {
    "id": "WifiLow",
    "name": "WifiLow",
    "category": "Devices",
    "keywords": "wifi low"
  },
  {
    "id": "WifiOff",
    "name": "WifiOff",
    "category": "Devices",
    "keywords": "wifi off"
  },
  {
    "id": "WifiPen",
    "name": "WifiPen",
    "category": "Design",
    "keywords": "wifi pen"
  },
  {
    "id": "WifiSync",
    "name": "WifiSync",
    "category": "Devices",
    "keywords": "wifi sync"
  },
  {
    "id": "WifiZero",
    "name": "WifiZero",
    "category": "Devices",
    "keywords": "wifi zero"
  },
  {
    "id": "Wind",
    "name": "Wind",
    "category": "General",
    "keywords": "wind"
  },
  {
    "id": "WindArrowDown",
    "name": "WindArrowDown",
    "category": "Navigation",
    "keywords": "wind arrow down"
  },
  {
    "id": "Wine",
    "name": "Wine",
    "category": "General",
    "keywords": "wine"
  },
  {
    "id": "WineOff",
    "name": "WineOff",
    "category": "General",
    "keywords": "wine off"
  },
  {
    "id": "Workflow",
    "name": "Workflow",
    "category": "General",
    "keywords": "workflow"
  },
  {
    "id": "Worm",
    "name": "Worm",
    "category": "General",
    "keywords": "worm"
  },
  {
    "id": "WrapText",
    "name": "WrapText",
    "category": "General",
    "keywords": "wrap text"
  },
  {
    "id": "Wrench",
    "name": "Wrench",
    "category": "System",
    "keywords": "wrench"
  },
  {
    "id": "X",
    "name": "X",
    "category": "General",
    "keywords": "x"
  },
  {
    "id": "XCircle",
    "name": "XCircle",
    "category": "General",
    "keywords": "x circle"
  },
  {
    "id": "XOctagon",
    "name": "XOctagon",
    "category": "Symbols",
    "keywords": "x octagon"
  },
  {
    "id": "XSquare",
    "name": "XSquare",
    "category": "General",
    "keywords": "x square"
  },
  {
    "id": "Youtube",
    "name": "Youtube",
    "category": "General",
    "keywords": "youtube"
  },
  {
    "id": "Zap",
    "name": "Zap",
    "category": "Symbols",
    "keywords": "zap"
  },
  {
    "id": "ZapOff",
    "name": "ZapOff",
    "category": "Symbols",
    "keywords": "zap off"
  },
  {
    "id": "ZoomIn",
    "name": "ZoomIn",
    "category": "Symbols",
    "keywords": "zoom in"
  },
  {
    "id": "ZoomOut",
    "name": "ZoomOut",
    "category": "Symbols",
    "keywords": "zoom out"
  }
];

export const ALL_EMOJI_ENTRIES: EmojiEntry[] = [
  {
    "emoji": "😀",
    "name": "Grinning Face",
    "category": "Smileys",
    "keywords": "smile happy face grinning"
  },
  {
    "emoji": "😃",
    "name": "Smiling Face with Big Eyes",
    "category": "Smileys",
    "keywords": "happy big eyes smile"
  },
  {
    "emoji": "😄",
    "name": "Grinning Face with Smiling Eyes",
    "category": "Smileys",
    "keywords": "smile laughing happy"
  },
  {
    "emoji": "😁",
    "name": "Beaming Face",
    "category": "Smileys",
    "keywords": "teeth smile grin"
  },
  {
    "emoji": "😆",
    "name": "Grinning Squinting Face",
    "category": "Smileys",
    "keywords": "laugh haha lol"
  },
  {
    "emoji": "😅",
    "name": "Sweat Smile",
    "category": "Smileys",
    "keywords": "sweat relief nervous"
  },
  {
    "emoji": "🤣",
    "name": "Rolling on Floor Laughing",
    "category": "Smileys",
    "keywords": "rofl lol laugh"
  },
  {
    "emoji": "😂",
    "name": "Face with Tears of Joy",
    "category": "Smileys",
    "keywords": "tears joy laugh lol"
  },
  {
    "emoji": "🙂",
    "name": "Slightly Smiling Face",
    "category": "Smileys",
    "keywords": "smile calm fine"
  },
  {
    "emoji": "🙃",
    "name": "Upside Down Face",
    "category": "Smileys",
    "keywords": "sarcasm silly upside"
  },
  {
    "emoji": "😉",
    "name": "Winking Face",
    "category": "Smileys",
    "keywords": "wink joke fun"
  },
  {
    "emoji": "😊",
    "name": "Smiling Face with Smiling Eyes",
    "category": "Smileys",
    "keywords": "blush warm happy"
  },
  {
    "emoji": "😇",
    "name": "Smiling Face with Halo",
    "category": "Smileys",
    "keywords": "angel halo holy innocent"
  },
  {
    "emoji": "🥰",
    "name": "Smiling Face with Hearts",
    "category": "Smileys",
    "keywords": "love hearts crush"
  },
  {
    "emoji": "😍",
    "name": "Heart Eyes",
    "category": "Smileys",
    "keywords": "love adore eyes"
  },
  {
    "emoji": "🤩",
    "name": "Star Struck",
    "category": "Smileys",
    "keywords": "star wow amazed"
  },
  {
    "emoji": "😘",
    "name": "Face Blowing a Kiss",
    "category": "Smileys",
    "keywords": "kiss love mwah"
  },
  {
    "emoji": "😋",
    "name": "Face Savoring Food",
    "category": "Smileys",
    "keywords": "yum delicious taste"
  },
  {
    "emoji": "😛",
    "name": "Face with Tongue",
    "category": "Smileys",
    "keywords": "tongue playful silly"
  },
  {
    "emoji": "😜",
    "name": "Winking Face with Tongue",
    "category": "Smileys",
    "keywords": "wink tongue crazy"
  },
  {
    "emoji": "🤪",
    "name": "Zany Face",
    "category": "Smileys",
    "keywords": "crazy zany wild"
  },
  {
    "emoji": "😝",
    "name": "Squinting Tongue",
    "category": "Smileys",
    "keywords": "silly tongue"
  },
  {
    "emoji": "🤑",
    "name": "Money-Mouth Face",
    "category": "Smileys",
    "keywords": "money rich cash dollar"
  },
  {
    "emoji": "🤗",
    "name": "Hugging Face",
    "category": "Smileys",
    "keywords": "hug embrace warm"
  },
  {
    "emoji": "🤭",
    "name": "Face with Hand Over Mouth",
    "category": "Smileys",
    "keywords": "oops giggle secret"
  },
  {
    "emoji": "🤫",
    "name": "Shushing Face",
    "category": "Smileys",
    "keywords": "shh quiet silence"
  },
  {
    "emoji": "🤔",
    "name": "Thinking Face",
    "category": "Smileys",
    "keywords": "think hmm idea ponder"
  },
  {
    "emoji": "🤐",
    "name": "Zipper-Mouth Face",
    "category": "Smileys",
    "keywords": "secret zipper quiet"
  },
  {
    "emoji": "🤨",
    "name": "Face with Raised Eyebrow",
    "category": "Smileys",
    "keywords": "skeptical distrust eyebrow"
  },
  {
    "emoji": "😐",
    "name": "Neutral Face",
    "category": "Smileys",
    "keywords": "neutral poker meh"
  },
  {
    "emoji": "😑",
    "name": "Expressionless Face",
    "category": "Smileys",
    "keywords": "blank deadpan meh"
  },
  {
    "emoji": "😶",
    "name": "Face Without Mouth",
    "category": "Smileys",
    "keywords": "speechless silent"
  },
  {
    "emoji": "😏",
    "name": "Smirking Face",
    "category": "Smileys",
    "keywords": "smirk smug flirt"
  },
  {
    "emoji": "😒",
    "name": "Unamused Face",
    "category": "Smileys",
    "keywords": "bored annoyed unimpressed"
  },
  {
    "emoji": "🙄",
    "name": "Face with Rolling Eyes",
    "category": "Smileys",
    "keywords": "eyeroll whatever bored"
  },
  {
    "emoji": "😬",
    "name": "Grimacing Face",
    "category": "Smileys",
    "keywords": "awkward cringe eek"
  },
  {
    "emoji": "🤥",
    "name": "Lying Face",
    "category": "Smileys",
    "keywords": "liar pinocchio"
  },
  {
    "emoji": "😌",
    "name": "Relieved Face",
    "category": "Smileys",
    "keywords": "peace calm zen"
  },
  {
    "emoji": "😔",
    "name": "Pensive Face",
    "category": "Smileys",
    "keywords": "sad pensive sorrow"
  },
  {
    "emoji": "😪",
    "name": "Sleepy Face",
    "category": "Smileys",
    "keywords": "tired sleepy snot"
  },
  {
    "emoji": "🤤",
    "name": "Drooling Face",
    "category": "Smileys",
    "keywords": "drool crave food"
  },
  {
    "emoji": "😴",
    "name": "Sleeping Face",
    "category": "Smileys",
    "keywords": "sleep zzz night"
  },
  {
    "emoji": "😷",
    "name": "Face with Medical Mask",
    "category": "Smileys",
    "keywords": "mask sick doctor"
  },
  {
    "emoji": "🤒",
    "name": "Face with Thermometer",
    "category": "Smileys",
    "keywords": "sick fever ill"
  },
  {
    "emoji": "🤕",
    "name": "Face with Head-Bandage",
    "category": "Smileys",
    "keywords": "hurt injury bandage"
  },
  {
    "emoji": "🤢",
    "name": "Nauseated Face",
    "category": "Smileys",
    "keywords": "disgust gross green"
  },
  {
    "emoji": "🤮",
    "name": "Face Vomiting",
    "category": "Smileys",
    "keywords": "puke vomit barf"
  },
  {
    "emoji": "🤧",
    "name": "Sneezing Face",
    "category": "Smileys",
    "keywords": "sneeze tissue cold"
  },
  {
    "emoji": "🥵",
    "name": "Hot Face",
    "category": "Smileys",
    "keywords": "hot fever summer sweat"
  },
  {
    "emoji": "🥶",
    "name": "Cold Face",
    "category": "Smileys",
    "keywords": "cold freezing winter ice"
  },
  {
    "emoji": "🥴",
    "name": "Woozy Face",
    "category": "Smileys",
    "keywords": "dizzy drunk tipsy"
  },
  {
    "emoji": "😵",
    "name": "Knocked-Out Face",
    "category": "Smileys",
    "keywords": "dead dizzy spiral"
  },
  {
    "emoji": "🤯",
    "name": "Exploding Head",
    "category": "Smileys",
    "keywords": "mind blown shocked boom"
  },
  {
    "emoji": "🤠",
    "name": "Cowboy Hat Face",
    "category": "Smileys",
    "keywords": "cowboy yeehaw west"
  },
  {
    "emoji": "🥳",
    "name": "Partying Face",
    "category": "Smileys",
    "keywords": "party celebrate horn birthday"
  },
  {
    "emoji": "😎",
    "name": "Smiling Face with Sunglasses",
    "category": "Smileys",
    "keywords": "cool sunglasses shades boss"
  },
  {
    "emoji": "🤓",
    "name": "Nerd Face",
    "category": "Smileys",
    "keywords": "nerd geek glasses code"
  },
  {
    "emoji": "🧐",
    "name": "Face with Monocle",
    "category": "Smileys",
    "keywords": "monocle classy inspect"
  },
  {
    "emoji": "😕",
    "name": "Confused Face",
    "category": "Smileys",
    "keywords": "confused puzzle"
  },
  {
    "emoji": "😟",
    "name": "Worried Face",
    "category": "Smileys",
    "keywords": "worried anxious"
  },
  {
    "emoji": "🙁",
    "name": "Slightly Frowning Face",
    "category": "Smileys",
    "keywords": "frown sad unhappy"
  },
  {
    "emoji": "😮",
    "name": "Face with Open Mouth",
    "category": "Smileys",
    "keywords": "surprise wow gasp"
  },
  {
    "emoji": "😯",
    "name": "Hushed Face",
    "category": "Smileys",
    "keywords": "hushed quiet surprise"
  },
  {
    "emoji": "😲",
    "name": "Astonished Face",
    "category": "Smileys",
    "keywords": "astonished shock omfg"
  },
  {
    "emoji": "😳",
    "name": "Flushed Face",
    "category": "Smileys",
    "keywords": "flushed embarrassed wide eyes"
  },
  {
    "emoji": "🥺",
    "name": "Pleading Face",
    "category": "Smileys",
    "keywords": "pleading puppy eyes please"
  },
  {
    "emoji": "😦",
    "name": "Frowning Face with Open Mouth",
    "category": "Smileys",
    "keywords": "shock awe sad"
  },
  {
    "emoji": "😨",
    "name": "Fearful Face",
    "category": "Smileys",
    "keywords": "scared fear terrified"
  },
  {
    "emoji": "😰",
    "name": "Anxious Face with Sweat",
    "category": "Smileys",
    "keywords": "nervous stress anxiety"
  },
  {
    "emoji": "😥",
    "name": "Sad but Relieved Face",
    "category": "Smileys",
    "keywords": "phew close call"
  },
  {
    "emoji": "😢",
    "name": "Crying Face",
    "category": "Smileys",
    "keywords": "tear cry sad"
  },
  {
    "emoji": "😭",
    "name": "Loudly Crying Face",
    "category": "Smileys",
    "keywords": "sob crying scream"
  },
  {
    "emoji": "😱",
    "name": "Face Screaming in Fear",
    "category": "Smileys",
    "keywords": "munch horror scream omg"
  },
  {
    "emoji": "😖",
    "name": "Confounded Face",
    "category": "Smileys",
    "keywords": "frustrated upset"
  },
  {
    "emoji": "😣",
    "name": "Persevering Face",
    "category": "Smileys",
    "keywords": "struggle pain"
  },
  {
    "emoji": "😞",
    "name": "Disappointed Face",
    "category": "Smileys",
    "keywords": "let down sad"
  },
  {
    "emoji": "😓",
    "name": "Downcast Face with Sweat",
    "category": "Smileys",
    "keywords": "sweat sad work"
  },
  {
    "emoji": "😩",
    "name": "Weary Face",
    "category": "Smileys",
    "keywords": "tired groan weary"
  },
  {
    "emoji": "😫",
    "name": "Tired Face",
    "category": "Smileys",
    "keywords": "exhausted whine"
  },
  {
    "emoji": "🥱",
    "name": "Yawning Face",
    "category": "Smileys",
    "keywords": "yawn bored sleepy"
  },
  {
    "emoji": "😤",
    "name": "Face with Steam From Nose",
    "category": "Smileys",
    "keywords": "triumph proud angry"
  },
  {
    "emoji": "😡",
    "name": "Enraged Face",
    "category": "Smileys",
    "keywords": "rage mad angry red"
  },
  {
    "emoji": "😠",
    "name": "Angry Face",
    "category": "Smileys",
    "keywords": "mad angry grrr"
  },
  {
    "emoji": "🤬",
    "name": "Face with Symbols on Mouth",
    "category": "Smileys",
    "keywords": "swear curse cuss bleep"
  },
  {
    "emoji": "😈",
    "name": "Smiling Face with Horns",
    "category": "Smileys",
    "keywords": "devil purple horn evil"
  },
  {
    "emoji": "👿",
    "name": "Angry Face with Horns",
    "category": "Smileys",
    "keywords": "demon evil angry"
  },
  {
    "emoji": "💀",
    "name": "Skull",
    "category": "Smileys",
    "keywords": "skull dead rip skeleton"
  },
  {
    "emoji": "☠️",
    "name": "Skull and Crossbones",
    "category": "Smileys",
    "keywords": "danger pirate poison"
  },
  {
    "emoji": "💩",
    "name": "Pile of Poo",
    "category": "Smileys",
    "keywords": "poop poopie silly"
  },
  {
    "emoji": "🤡",
    "name": "Clown Face",
    "category": "Smileys",
    "keywords": "clown circus joker"
  },
  {
    "emoji": "👹",
    "name": "Ogre",
    "category": "Smileys",
    "keywords": "japanese monster ogre"
  },
  {
    "emoji": "👺",
    "name": "Goblin",
    "category": "Smileys",
    "keywords": "tengu goblin red mask"
  },
  {
    "emoji": "👻",
    "name": "Ghost",
    "category": "Smileys",
    "keywords": "ghost boo spooky halloween"
  },
  {
    "emoji": "👽",
    "name": "Alien",
    "category": "Smileys",
    "keywords": "alien ufo space et"
  },
  {
    "emoji": "👾",
    "name": "Alien Monster",
    "category": "Smileys",
    "keywords": "retro arcade pixel game"
  },
  {
    "emoji": "🤖",
    "name": "Robot",
    "category": "Smileys",
    "keywords": "bot machine ai automation"
  },
  {
    "emoji": "👋",
    "name": "Waving Hand",
    "category": "Gestures",
    "keywords": "wave hello bye hi"
  },
  {
    "emoji": "🤚",
    "name": "Raised Back of Hand",
    "category": "Gestures",
    "keywords": "back hand stop"
  },
  {
    "emoji": "🖐️",
    "name": "Hand with Fingers Splayed",
    "category": "Gestures",
    "keywords": "five high five hand"
  },
  {
    "emoji": "✋",
    "name": "Raised Hand",
    "category": "Gestures",
    "keywords": "stop high five hand"
  },
  {
    "emoji": "🖖",
    "name": "Vulcan Salute",
    "category": "Gestures",
    "keywords": "spock live long trek"
  },
  {
    "emoji": "👌",
    "name": "OK Hand",
    "category": "Gestures",
    "keywords": "ok perfect good nice"
  },
  {
    "emoji": "🤌",
    "name": "Pinched Fingers",
    "category": "Gestures",
    "keywords": "italian gesture chefs kiss"
  },
  {
    "emoji": "🤏",
    "name": "Pinching Hand",
    "category": "Gestures",
    "keywords": "small tiny little bit"
  },
  {
    "emoji": "✌️",
    "name": "Victory Hand",
    "category": "Gestures",
    "keywords": "peace victory two v"
  },
  {
    "emoji": "🤞",
    "name": "Crossed Fingers",
    "category": "Gestures",
    "keywords": "luck hope wish"
  },
  {
    "emoji": "🤟",
    "name": "Love-You Gesture",
    "category": "Gestures",
    "keywords": "love you sign ily"
  },
  {
    "emoji": "🤘",
    "name": "Sign of the Horns",
    "category": "Gestures",
    "keywords": "rock metal music horns"
  },
  {
    "emoji": "🤙",
    "name": "Call Me Hand",
    "category": "Gestures",
    "keywords": "shaka call chill phone"
  },
  {
    "emoji": "👈",
    "name": "Backhand Index Pointing Left",
    "category": "Gestures",
    "keywords": "point left back"
  },
  {
    "emoji": "👉",
    "name": "Backhand Index Pointing Right",
    "category": "Gestures",
    "keywords": "point right forward"
  },
  {
    "emoji": "👆",
    "name": "Backhand Index Pointing Up",
    "category": "Gestures",
    "keywords": "point up top"
  },
  {
    "emoji": "🖕",
    "name": "Middle Finger",
    "category": "Gestures",
    "keywords": "rude finger bird"
  },
  {
    "emoji": "👇",
    "name": "Backhand Index Pointing Down",
    "category": "Gestures",
    "keywords": "point down bottom"
  },
  {
    "emoji": "☝️",
    "name": "Index Pointing Up",
    "category": "Gestures",
    "keywords": "one first point up"
  },
  {
    "emoji": "👍",
    "name": "Thumbs Up",
    "category": "Gestures",
    "keywords": "like approve good yes plus"
  },
  {
    "emoji": "👎",
    "name": "Thumbs Down",
    "category": "Gestures",
    "keywords": "dislike bad no minus"
  },
  {
    "emoji": "✊",
    "name": "Raised Fist",
    "category": "Gestures",
    "keywords": "fist power fight"
  },
  {
    "emoji": "👊",
    "name": "Oncoming Fist",
    "category": "Gestures",
    "keywords": "brofist punch bump"
  },
  {
    "emoji": "🤛",
    "name": "Left-Facing Fist",
    "category": "Gestures",
    "keywords": "fist bump left"
  },
  {
    "emoji": "🤜",
    "name": "Right-Facing Fist",
    "category": "Gestures",
    "keywords": "fist bump right"
  },
  {
    "emoji": "👏",
    "name": "Clapping Hands",
    "category": "Gestures",
    "keywords": "applause clap bravo"
  },
  {
    "emoji": "🙌",
    "name": "Raising Hands",
    "category": "Gestures",
    "keywords": "celebrate hooray praise"
  },
  {
    "emoji": "👐",
    "name": "Open Hands",
    "category": "Gestures",
    "keywords": "open hug jazz hands"
  },
  {
    "emoji": "🤲",
    "name": "Palms Up Together",
    "category": "Gestures",
    "keywords": "pray offer cupped"
  },
  {
    "emoji": "🤝",
    "name": "Handshake",
    "category": "Gestures",
    "keywords": "deal agree partner meet"
  },
  {
    "emoji": "🙏",
    "name": "Folded Hands",
    "category": "Gestures",
    "keywords": "pray please thanks namaste"
  },
  {
    "emoji": "✍️",
    "name": "Writing Hand",
    "category": "Gestures",
    "keywords": "write pen pencil note"
  },
  {
    "emoji": "💅",
    "name": "Nail Polish",
    "category": "Gestures",
    "keywords": "beauty sassy nails"
  },
  {
    "emoji": "🤳",
    "name": "Selfie",
    "category": "Gestures",
    "keywords": "camera phone photo"
  },
  {
    "emoji": "💪",
    "name": "Flexed Biceps",
    "category": "Gestures",
    "keywords": "muscle strong power fit"
  },
  {
    "emoji": "🦾",
    "name": "Mechanical Arm",
    "category": "Gestures",
    "keywords": "bionic prosthetic robot arm"
  },
  {
    "emoji": "💻",
    "name": "Laptop",
    "category": "Tech",
    "keywords": "laptop computer macbook pc code"
  },
  {
    "emoji": "🖥️",
    "name": "Desktop Computer",
    "category": "Tech",
    "keywords": "monitor desktop screen pc"
  },
  {
    "emoji": "🖨️",
    "name": "Printer",
    "category": "Tech",
    "keywords": "print paper office"
  },
  {
    "emoji": "⌨️",
    "name": "Keyboard",
    "category": "Tech",
    "keywords": "keyboard type macropad mechanical"
  },
  {
    "emoji": "🖱️",
    "name": "Computer Mouse",
    "category": "Tech",
    "keywords": "mouse click cursor scroll"
  },
  {
    "emoji": "🖲️",
    "name": "Trackball",
    "category": "Tech",
    "keywords": "trackball ball mouse"
  },
  {
    "emoji": "🕹️",
    "name": "Joystick",
    "category": "Tech",
    "keywords": "joystick game arcade controller"
  },
  {
    "emoji": "🎮",
    "name": "Video Game Controller",
    "category": "Tech",
    "keywords": "gamepad controller play station xbox"
  },
  {
    "emoji": "📱",
    "name": "Mobile Phone",
    "category": "Tech",
    "keywords": "iphone smartphone cell"
  },
  {
    "emoji": "📲",
    "name": "Mobile Phone with Arrow",
    "category": "Tech",
    "keywords": "call incoming screen"
  },
  {
    "emoji": "🔋",
    "name": "Battery",
    "category": "Tech",
    "keywords": "battery power charge energy"
  },
  {
    "emoji": "🪫",
    "name": "Low Battery",
    "category": "Tech",
    "keywords": "battery empty dead"
  },
  {
    "emoji": "🔌",
    "name": "Electric Plug",
    "category": "Tech",
    "keywords": "plug cord cable power"
  },
  {
    "emoji": "💾",
    "name": "Floppy Disk",
    "category": "Tech",
    "keywords": "save disk retro storage"
  },
  {
    "emoji": "💿",
    "name": "Optical Disk",
    "category": "Tech",
    "keywords": "cd dvd disc optical"
  },
  {
    "emoji": "📀",
    "name": "DVD",
    "category": "Tech",
    "keywords": "dvd blu-ray movie"
  },
  {
    "emoji": "📼",
    "name": "Videocassette",
    "category": "Tech",
    "keywords": "vhs tape retro"
  },
  {
    "emoji": "📷",
    "name": "Camera",
    "category": "Tech",
    "keywords": "camera photo picture snapshot"
  },
  {
    "emoji": "📸",
    "name": "Camera with Flash",
    "category": "Tech",
    "keywords": "flash photo camera"
  },
  {
    "emoji": "📹",
    "name": "Video Camera",
    "category": "Tech",
    "keywords": "camcorder record video"
  },
  {
    "emoji": "🎥",
    "name": "Movie Camera",
    "category": "Tech",
    "keywords": "film cinema movie hollywood"
  },
  {
    "emoji": "📽️",
    "name": "Film Projector",
    "category": "Tech",
    "keywords": "cinema projector screening"
  },
  {
    "emoji": "🎬",
    "name": "Clapper Board",
    "category": "Tech",
    "keywords": "action cut take film scene"
  },
  {
    "emoji": "📺",
    "name": "Television",
    "category": "Tech",
    "keywords": "tv screen retro stream"
  },
  {
    "emoji": "🎙️",
    "name": "Studio Microphone",
    "category": "Tech",
    "keywords": "mic record podcast voice audio"
  },
  {
    "emoji": "🎚️",
    "name": "Level Slider",
    "category": "Tech",
    "keywords": "fader volume slider audio mix"
  },
  {
    "emoji": "🎛️",
    "name": "Control Knobs",
    "category": "Tech",
    "keywords": "knob dial sound mix equalizer"
  },
  {
    "emoji": "🎤",
    "name": "Microphone",
    "category": "Tech",
    "keywords": "sing karaoke mic"
  },
  {
    "emoji": "🎧",
    "name": "Headphone",
    "category": "Tech",
    "keywords": "audio music listen cans"
  },
  {
    "emoji": "📻",
    "name": "Radio",
    "category": "Tech",
    "keywords": "radio broadcast audio"
  },
  {
    "emoji": "📡",
    "name": "Satellite Antenna",
    "category": "Tech",
    "keywords": "dish signal wireless stream"
  },
  {
    "emoji": "💡",
    "name": "Light Bulb",
    "category": "Tech",
    "keywords": "idea lamp smart bright"
  },
  {
    "emoji": "🔦",
    "name": "Flashlight",
    "category": "Tech",
    "keywords": "torch light dark beam"
  },
  {
    "emoji": "🔬",
    "name": "Microscope",
    "category": "Tech",
    "keywords": "science lab research zoom"
  },
  {
    "emoji": "🔭",
    "name": "Telescope",
    "category": "Tech",
    "keywords": "space stars astronomy look"
  },
  {
    "emoji": "🚀",
    "name": "Rocket",
    "category": "Tech",
    "keywords": "launch fast boost speed"
  },
  {
    "emoji": "🛸",
    "name": "Flying Saucer",
    "category": "Tech",
    "keywords": "ufo alien sci-fi"
  },
  {
    "emoji": "🌐",
    "name": "Globe with Meridians",
    "category": "Tech",
    "keywords": "internet web online world network"
  },
  {
    "emoji": "🎨",
    "name": "Artist Palette",
    "category": "Design",
    "keywords": "paint color art design draw"
  },
  {
    "emoji": "🖌️",
    "name": "Paintbrush",
    "category": "Design",
    "keywords": "brush stroke paint draw"
  },
  {
    "emoji": "🖍️",
    "name": "Crayon",
    "category": "Design",
    "keywords": "drawing color sketch"
  },
  {
    "emoji": "✏️",
    "name": "Pencil",
    "category": "Design",
    "keywords": "pencil draw write edit draft"
  },
  {
    "emoji": "✒️",
    "name": "Black Nib",
    "category": "Design",
    "keywords": "pen nib vector curve ink"
  },
  {
    "emoji": "🖋️",
    "name": "Fountain Pen",
    "category": "Design",
    "keywords": "pen ink signature calligrapy"
  },
  {
    "emoji": "📝",
    "name": "Memo",
    "category": "Design",
    "keywords": "note memo document pad"
  },
  {
    "emoji": "📐",
    "name": "Triangular Ruler",
    "category": "Design",
    "keywords": "ruler scale measure math"
  },
  {
    "emoji": "📏",
    "name": "Straight Ruler",
    "category": "Design",
    "keywords": "ruler dimension metric width"
  },
  {
    "emoji": "✂️",
    "name": "Scissors",
    "category": "Design",
    "keywords": "cut trim clip edit tool"
  },
  {
    "emoji": "📌",
    "name": "Pushpin",
    "category": "Design",
    "keywords": "pin bookmark mark save"
  },
  {
    "emoji": "📍",
    "name": "Round Pushpin",
    "category": "Design",
    "keywords": "pin location map red"
  },
  {
    "emoji": "📎",
    "name": "Paperclip",
    "category": "Design",
    "keywords": "attach clip link file"
  },
  {
    "emoji": "🖇️",
    "name": "Linked Paperclips",
    "category": "Design",
    "keywords": "connect attach chain"
  },
  {
    "emoji": "📁",
    "name": "File Folder",
    "category": "Design",
    "keywords": "folder directory organize"
  },
  {
    "emoji": "📂",
    "name": "Open File Folder",
    "category": "Design",
    "keywords": "folder open explore browse"
  },
  {
    "emoji": "📄",
    "name": "Page Facing Up",
    "category": "Design",
    "keywords": "file document paper text"
  },
  {
    "emoji": "📃",
    "name": "Page with Curl",
    "category": "Design",
    "keywords": "script doc curl"
  },
  {
    "emoji": "📋",
    "name": "Clipboard",
    "category": "Design",
    "keywords": "copy paste checklist board"
  },
  {
    "emoji": "📊",
    "name": "Bar Chart",
    "category": "Design",
    "keywords": "graph stats report metrics"
  },
  {
    "emoji": "📈",
    "name": "Chart Increasing",
    "category": "Design",
    "keywords": "growth trend up profit"
  },
  {
    "emoji": "📉",
    "name": "Chart Decreasing",
    "category": "Design",
    "keywords": "loss down drop trend"
  },
  {
    "emoji": "📦",
    "name": "Package",
    "category": "Design",
    "keywords": "box delivery shipment npm"
  },
  {
    "emoji": "🏷️",
    "name": "Label",
    "category": "Design",
    "keywords": "tag badge metadata name"
  },
  {
    "emoji": "🔒",
    "name": "Locked",
    "category": "Design",
    "keywords": "lock secure privacy safe"
  },
  {
    "emoji": "🔓",
    "name": "Unlocked",
    "category": "Design",
    "keywords": "unlock access open"
  },
  {
    "emoji": "🔑",
    "name": "Key",
    "category": "Design",
    "keywords": "key password auth token"
  },
  {
    "emoji": "🗝️",
    "name": "Old Key",
    "category": "Design",
    "keywords": "secret antique vintage"
  },
  {
    "emoji": "🔨",
    "name": "Hammer",
    "category": "Design",
    "keywords": "hammer tool build repair"
  },
  {
    "emoji": "🛠️",
    "name": "Hammer and Wrench",
    "category": "Design",
    "keywords": "tools maintenance setup configure"
  },
  {
    "emoji": "🔧",
    "name": "Wrench",
    "category": "Design",
    "keywords": "spanner fix adjust settings"
  },
  {
    "emoji": "🪛",
    "name": "Screwdriver",
    "category": "Design",
    "keywords": "tool hardware screw tighten"
  },
  {
    "emoji": "🔩",
    "name": "Nut and Bolt",
    "category": "Design",
    "keywords": "screw bolt fasten mechanical"
  },
  {
    "emoji": "⚙️",
    "name": "Gear",
    "category": "Design",
    "keywords": "settings gear engine cog options"
  },
  {
    "emoji": "🧲",
    "name": "Magnet",
    "category": "Design",
    "keywords": "attract snap magnetic force"
  },
  {
    "emoji": "💎",
    "name": "Gem Stone",
    "category": "Design",
    "keywords": "diamond gem premium crystal"
  },
  {
    "emoji": "🎵",
    "name": "Musical Note",
    "category": "Design",
    "keywords": "music song tune sound"
  },
  {
    "emoji": "🎶",
    "name": "Musical Notes",
    "category": "Design",
    "keywords": "melody music tracks"
  },
  {
    "emoji": "🎼",
    "name": "Musical Score",
    "category": "Design",
    "keywords": "clef sheet music compose"
  },
  {
    "emoji": "🎹",
    "name": "Musical Keyboard",
    "category": "Design",
    "keywords": "piano midi keys synth"
  },
  {
    "emoji": "🎸",
    "name": "Guitar",
    "category": "Design",
    "keywords": "electric rock guitar acoustic"
  },
  {
    "emoji": "🥁",
    "name": "Drum",
    "category": "Design",
    "keywords": "drum beat rhythm percussion"
  },
  {
    "emoji": "🔔",
    "name": "Bell",
    "category": "Design",
    "keywords": "notification alert ring sound"
  },
  {
    "emoji": "🔕",
    "name": "Bell with Slash",
    "category": "Design",
    "keywords": "mute silent notification dnd"
  },
  {
    "emoji": "🔊",
    "name": "Speaker High Volume",
    "category": "Design",
    "keywords": "audio volume loud max"
  },
  {
    "emoji": "🔇",
    "name": "Muted Speaker",
    "category": "Design",
    "keywords": "mute silence no sound"
  },
  {
    "emoji": "⭐",
    "name": "Star",
    "category": "Symbols",
    "keywords": "star favorite rating mark"
  },
  {
    "emoji": "🌟",
    "name": "Glowing Star",
    "category": "Symbols",
    "keywords": "shine glitter bright"
  },
  {
    "emoji": "✨",
    "name": "Sparkles",
    "category": "Symbols",
    "keywords": "sparkle magic ai clean new"
  },
  {
    "emoji": "⚡",
    "name": "High Voltage",
    "category": "Symbols",
    "keywords": "zap bolt flash lightning electric"
  },
  {
    "emoji": "🔥",
    "name": "Fire",
    "category": "Symbols",
    "keywords": "flame hot lit trend streak"
  },
  {
    "emoji": "💥",
    "name": "Collision",
    "category": "Symbols",
    "keywords": "boom explosion pop crash"
  },
  {
    "emoji": "☀️",
    "name": "Sun",
    "category": "Symbols",
    "keywords": "sunny day bright light mode"
  },
  {
    "emoji": "🌙",
    "name": "Crescent Moon",
    "category": "Symbols",
    "keywords": "moon night dark mode sleep"
  },
  {
    "emoji": "❤️",
    "name": "Red Heart",
    "category": "Symbols",
    "keywords": "love heart red favorite"
  },
  {
    "emoji": "💙",
    "name": "Blue Heart",
    "category": "Symbols",
    "keywords": "blue heart like"
  },
  {
    "emoji": "💚",
    "name": "Green Heart",
    "category": "Symbols",
    "keywords": "green heart eco"
  },
  {
    "emoji": "💛",
    "name": "Yellow Heart",
    "category": "Symbols",
    "keywords": "yellow heart warm"
  },
  {
    "emoji": "💜",
    "name": "Purple Heart",
    "category": "Symbols",
    "keywords": "purple heart vip"
  },
  {
    "emoji": "🖤",
    "name": "Black Heart",
    "category": "Symbols",
    "keywords": "black heart dark"
  },
  {
    "emoji": "🤍",
    "name": "White Heart",
    "category": "Symbols",
    "keywords": "white heart pure"
  },
  {
    "emoji": "💯",
    "name": "Hundred Points",
    "category": "Symbols",
    "keywords": "100 percent perfect full score"
  },
  {
    "emoji": "✅",
    "name": "Check Mark Button",
    "category": "Symbols",
    "keywords": "check done complete success green"
  },
  {
    "emoji": "❌",
    "name": "Cross Mark",
    "category": "Symbols",
    "keywords": "x cancel delete error reject"
  },
  {
    "emoji": "⚠️",
    "name": "Warning",
    "category": "Symbols",
    "keywords": "alert caution danger warning"
  },
  {
    "emoji": "⛔",
    "name": "No Entry",
    "category": "Symbols",
    "keywords": "stop forbidden restricted"
  },
  {
    "emoji": "🛑",
    "name": "Stop Sign",
    "category": "Symbols",
    "keywords": "stop halt octagonal"
  },
  {
    "emoji": "💬",
    "name": "Speech Balloon",
    "category": "Symbols",
    "keywords": "chat message comment talk"
  },
  {
    "emoji": "💭",
    "name": "Thought Balloon",
    "category": "Symbols",
    "keywords": "think thought dream"
  },
  {
    "emoji": "💤",
    "name": "Zzz",
    "category": "Symbols",
    "keywords": "sleep idle pause wait"
  },
  {
    "emoji": "🎯",
    "name": "Direct Hit",
    "category": "Symbols",
    "keywords": "target bullseye goal accurate"
  },
  {
    "emoji": "🏆",
    "name": "Trophy",
    "category": "Symbols",
    "keywords": "winner prize award gold"
  },
  {
    "emoji": "🥇",
    "name": "1st Place Medal",
    "category": "Symbols",
    "keywords": "first gold medal champion"
  },
  {
    "emoji": "🥈",
    "name": "2nd Place Medal",
    "category": "Symbols",
    "keywords": "second silver medal"
  },
  {
    "emoji": "🥉",
    "name": "3rd Place Medal",
    "category": "Symbols",
    "keywords": "third bronze medal"
  },
  {
    "emoji": "☕",
    "name": "Hot Beverage",
    "category": "Symbols",
    "keywords": "coffee tea break cup mug"
  },
  {
    "emoji": "🍵",
    "name": "Teacup",
    "category": "Symbols",
    "keywords": "green tea matcha warm"
  },
  {
    "emoji": "🍺",
    "name": "Beer Mug",
    "category": "Symbols",
    "keywords": "beer drink cheers"
  },
  {
    "emoji": "🍕",
    "name": "Pizza",
    "category": "Symbols",
    "keywords": "food slice cheese"
  },
  {
    "emoji": "🍔",
    "name": "Hamburger",
    "category": "Symbols",
    "keywords": "burger food fast"
  },
  {
    "emoji": "🍣",
    "name": "Sushi",
    "category": "Symbols",
    "keywords": "japanese sushi raw fish"
  },
  {
    "emoji": "🍩",
    "name": "Doughnut",
    "category": "Symbols",
    "keywords": "donut sweet snack"
  },
  {
    "emoji": "⬆️",
    "name": "Up Arrow",
    "category": "Arrows",
    "keywords": "arrow up top north"
  },
  {
    "emoji": "↗️",
    "name": "Up-Right Arrow",
    "category": "Arrows",
    "keywords": "arrow diagonal northeast"
  },
  {
    "emoji": "➡️",
    "name": "Right Arrow",
    "category": "Arrows",
    "keywords": "arrow right next forward east"
  },
  {
    "emoji": "↘️",
    "name": "Down-Right Arrow",
    "category": "Arrows",
    "keywords": "arrow diagonal southeast"
  },
  {
    "emoji": "⬇️",
    "name": "Down Arrow",
    "category": "Arrows",
    "keywords": "arrow down bottom south"
  },
  {
    "emoji": "↙️",
    "name": "Down-Left Arrow",
    "category": "Arrows",
    "keywords": "arrow diagonal southwest"
  },
  {
    "emoji": "⬅️",
    "name": "Left Arrow",
    "category": "Arrows",
    "keywords": "arrow left back previous west"
  },
  {
    "emoji": "↖️",
    "name": "Up-Left Arrow",
    "category": "Arrows",
    "keywords": "arrow diagonal northwest"
  },
  {
    "emoji": "↕️",
    "name": "Up-Down Arrow",
    "category": "Arrows",
    "keywords": "vertical resize height"
  },
  {
    "emoji": "↔️",
    "name": "Left-Right Arrow",
    "category": "Arrows",
    "keywords": "horizontal resize width"
  },
  {
    "emoji": "↩️",
    "name": "Right Arrow Curving Left",
    "category": "Arrows",
    "keywords": "undo return enter"
  },
  {
    "emoji": "↪️",
    "name": "Left Arrow Curving Right",
    "category": "Arrows",
    "keywords": "redo forward curve"
  },
  {
    "emoji": "🔄",
    "name": "Counterclockwise Arrows Button",
    "category": "Arrows",
    "keywords": "sync reload refresh loop"
  },
  {
    "emoji": "🔃",
    "name": "Clockwise Vertical Arrows",
    "category": "Arrows",
    "keywords": "reload rotate circle"
  },
  {
    "emoji": "🔀",
    "name": "Shuffle Tracks Button",
    "category": "Arrows",
    "keywords": "shuffle random cross"
  },
  {
    "emoji": "🔁",
    "name": "Repeat Button",
    "category": "Arrows",
    "keywords": "repeat loop replay"
  },
  {
    "emoji": "▶️",
    "name": "Play Button",
    "category": "Arrows",
    "keywords": "play start run resume"
  },
  {
    "emoji": "⏩",
    "name": "Fast-Forward Button",
    "category": "Arrows",
    "keywords": "fast forward speed shuttle"
  },
  {
    "emoji": "⏭️",
    "name": "Next Track Button",
    "category": "Arrows",
    "keywords": "next skip step forward"
  },
  {
    "emoji": "⏯️",
    "name": "Play or Pause Button",
    "category": "Arrows",
    "keywords": "play pause toggle"
  },
  {
    "emoji": "◀️",
    "name": "Reverse Button",
    "category": "Arrows",
    "keywords": "back reverse left"
  },
  {
    "emoji": "⏪",
    "name": "Fast Reverse Button",
    "category": "Arrows",
    "keywords": "rewind back speed shuttle"
  },
  {
    "emoji": "⏮️",
    "name": "Last Track Button",
    "category": "Arrows",
    "keywords": "previous restart skip back"
  },
  {
    "emoji": "🔼",
    "name": "Upwards Button",
    "category": "Arrows",
    "keywords": "triangle up top"
  },
  {
    "emoji": "🔽",
    "name": "Downwards Button",
    "category": "Arrows",
    "keywords": "triangle down bottom"
  },
  {
    "emoji": "⏸️",
    "name": "Pause Button",
    "category": "Arrows",
    "keywords": "pause hold wait stop"
  },
  {
    "emoji": "⏹️",
    "name": "Stop Button",
    "category": "Arrows",
    "keywords": "stop square halt end"
  },
  {
    "emoji": "⏺️",
    "name": "Record Button",
    "category": "Arrows",
    "keywords": "record circle rec capture"
  },
  {
    "emoji": "🔴",
    "name": "Red Circle",
    "category": "Arrows",
    "keywords": "red dot circle record"
  },
  {
    "emoji": "🟢",
    "name": "Green Circle",
    "category": "Arrows",
    "keywords": "green dot online active ready"
  },
  {
    "emoji": "🔵",
    "name": "Blue Circle",
    "category": "Arrows",
    "keywords": "blue dot primary circle"
  },
  {
    "emoji": "🟡",
    "name": "Yellow Circle",
    "category": "Arrows",
    "keywords": "yellow dot warning idle"
  },
  {
    "emoji": "🟣",
    "name": "Purple Circle",
    "category": "Arrows",
    "keywords": "purple dot color"
  },
  {
    "emoji": "⚫",
    "name": "Black Circle",
    "category": "Arrows",
    "keywords": "black dot dark circle"
  },
  {
    "emoji": "⚪",
    "name": "White Circle",
    "category": "Arrows",
    "keywords": "white dot circle light"
  },
  {
    "emoji": "🟥",
    "name": "Red Square",
    "category": "Arrows",
    "keywords": "red square stop"
  },
  {
    "emoji": "🟩",
    "name": "Green Square",
    "category": "Arrows",
    "keywords": "green square ok"
  },
  {
    "emoji": "🟦",
    "name": "Blue Square",
    "category": "Arrows",
    "keywords": "blue square block"
  },
  {
    "emoji": "🟨",
    "name": "Yellow Square",
    "category": "Arrows",
    "keywords": "yellow square amber"
  },
  {
    "emoji": "⬛",
    "name": "Black Large Square",
    "category": "Arrows",
    "keywords": "black square dark box"
  },
  {
    "emoji": "⬜",
    "name": "White Large Square",
    "category": "Arrows",
    "keywords": "white square light box"
  }
];
