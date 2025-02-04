
<!-- جدول لعرض البيانات -->
<table border="1" id="dataTable">
    <!-- الأعناوين ستظهر هنا تلقائياً -->
</table>

<script>
// مسار الملف الثابت
var filePath = 'مسار_الملف.xlsx';

// قراءة الملف وعرض البيانات
readExcel(filePath);

function readExcel(filePath) {
    var reader = new FileReader();

    // قراءة الملف
    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });

        // احصل على أول ورقة داخل الملف
        var sheetName = workbook.SheetNames[0];
        var sheet = workbook.Sheets[sheetName];

        // تحويل البيانات إلى مصفوفة
        var dataArray = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // عرض البيانات في الجدول
        displayDataInTable(dataArray);
    };

    // قراءة الملف كمصفوفة
    fetch(filePath)
        .then(response => response.blob())
        .then(blob => reader.readAsArrayBuffer(blob));
}

function displayDataInTable(dataArray) {
    var table = document.getElementById('dataTable');
    table.innerHTML = '';

    // إضافة صفوف وأعمدة إلى الجدول
    for (var i = 0; i < dataArray.length; i++) {
        var row = table.insertRow(i);

        for (var j = 0; j < dataArray[i].length; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = dataArray[i][j];
        }
    }
}
</script>

<!-- تضمين مكتبة xlsx لقراءة ملفات Excel -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js"></script>