// ChatGPTに作ってもらった判定用関数

function classifyBloodPressure(systolic, diastolic) {
    if (systolic < 115 && diastolic < 75) {
        return '正常血圧';
    } else if (systolic >= 115 && systolic <= 124 && diastolic < 75) {
        return '正常高値血圧';
    } else if ((systolic >= 125 && systolic <= 134) || (diastolic >= 75 && diastolic <= 84)) {
        return '高値血圧';
    } else if ((systolic >= 135 && systolic <= 144) || (diastolic >= 85 && diastolic <= 89)) {
        return 'Ⅰ度高血圧';
    } else if ((systolic >= 145 && systolic <= 159) || (diastolic >= 90 && diastolic <= 99)) {
        return 'Ⅱ度高血圧';
    } else if (systolic >= 160 || diastolic >= 100) {
        return 'Ⅲ度高血圧';
    } else if (systolic >= 135 && diastolic < 85) {
        return '孤立性収縮期高血圧';
    } else {
        return '分類外';
    }
}

// 使用例
console.log(classifyBloodPressure(140, 88)); // Ⅰ度高血圧
console.log(classifyBloodPressure(130, 82)); // 高値血圧
console.log(classifyBloodPressure(150, 95)); // Ⅱ度高血圧
console.log(classifyBloodPressure(123, 74)); // 正常高値血圧
console.log(classifyBloodPressure(165, 101)); // Ⅲ度高血圧
