function isNumber(input) {
  return !Number.isNaN(parseFloat(input));
}

// 使用於Api的轉換
export function areaTrans(currentArea) {
  if (isNumber(currentArea)) {
    switch (currentArea) {
      case 1:
        return '臺北市'
      case 2:
        return '新北市'
      default:
        return null
    }
  }
  else {
    switch (currentArea) {
      case '臺北市':
        return 1
      case '新北市':
        return 2
      default:
        return null
    }
  }
}
export function blockTrans(currentArea, currentBlock) {
  if (isNumber(currentArea) && isNumber(currentBlock)) {
    if (currentArea === 1) {
      switch (currentBlock) {
        case 1:
          return '中正區';
        case 2:
          return '大同區';
        case 3:
          return '中山區';
        case 4:
          return '松山區';
        case 5:
          return '大安區';
        case 6:
          return '萬華區';
        case 7:
          return '信義區';
        case 8:
          return '士林區';
        case 9:
          return '北投區';
        case 10:
          return '內湖區';
        case 11:
          return '南港區';
        case 12:
          return '文山區';
        default:
          return null;
      }
    } else if (currentArea === 2) {
      switch (currentBlock) {
        case 1:
          return '板橋區'
        case 2:
          return '三重區'
        case 3:
          return '中和區'
        case 4:
          return '永和區'
        case 5:
          return '新莊區'
        case 6:
          return '新店區'
        case 7:
          return '樹林區'
        case 8:
          return '鶯歌區'
        case 9:
          return '三峽區'
        case 10:
          return '淡水區'
        case 11:
          return '汐止區'
        case 12:
          return '瑞芳區'
        case 13:
          return '土城區'
        case 14:
          return '蘆洲區'
        case 15:
          return '五股區'
        case 16:
          return '泰山區'
        case 17:
          return '林口區'
        case 18:
          return '深坑區'
        case 19:
          return '石碇區'
        case 20:
          return '坪林區'
        case 21:
          return '三芝區'
        case 22:
          return '石門區'
        case 23:
          return '八里區'
        case 24:
          return '平溪區'
        case 25:
          return '雙溪區'
        case 26:
          return '貢寮區'
        default:
          return null
      }
    }
  } else if (!(isNumber(currentArea) && isNumber(currentBlock))) {
    if (currentArea === '臺北市') {
      switch (currentBlock) {
        case '中正區':
          return 1;
        case '大同區':
          return 2;
        case '中山區':
          return 3;
        case '松山區':
          return 4;
        case '大安區':
          return 5;
        case '萬華區':
          return 6;
        case '信義區':
          return 7;
        case '士林區':
          return 8
        case '北投區':
          return 9
        case '內湖區':
          return 10
        case '南港區':
          return 11
        case '文山區':
          return 12
        default:
          return null
      }
    }
    else if (currentArea === '新北市') {
      switch (currentBlock) {
        case '板橋區':
          return 1
        case '三重區':
          return 2
        case '中和區':
          return 3
        case '永和區':
          return 4
        case '新莊區':
          return 5
        case '新店區':
          return 6
        case '樹林區':
          return 7
        case '鶯歌區':
          return 8
        case '三峽區':
          return 9
        case '淡水區':
          return 10
        case '汐止區':
          return 11
        case '瑞芳區':
          return 12
        case '土城區':
          return 13
        case '蘆洲區':
          return 14
        case '五股區':
          return 15
        case '泰山區':
          return 16
        case '林口區':
          return 17
        case '深坑區':
          return 18
        case '石碇區':
          return 19
        case '坪林區':
          return 20
        case '三芝區':
          return 21
        case '石門區':
          return 22
        case '八里區':
          return 23
        case '平溪區':
          return 24
        case '雙溪區':
          return 25
        case '貢寮區':
          return 26
        default:
          return null
      }
    }
  }
}

export function typeTrans(type) {
  if (isNumber(type)) {
    switch (type) {
      case 1:
        return '火鍋'
      case 2:
        return '燒烤'
      case 3:
        return '小吃'
      case 4:
        return '甜點'
      default:
        return null
    }
  } else if (!isNumber(type)) {
    switch (type) {
      case '火鍋':
        return 1
      case '燒烤':
        return 2
      case '小吃':
        return 3
      case '甜點':
        return 4
      default: return null
    }
  }
}
