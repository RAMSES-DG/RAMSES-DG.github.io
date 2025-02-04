<style>
        #searchBox, #filterBox {
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            outline: none;
        }
    </style>

<!-- مربع الإدخال المتقدم -->
<input type="text" id="filterBox" placeholder="ابحث في ..." oninput="filterFunction()">

<script>
    function searchFunction() {
        var input, filter, content, p, i, txtValue;
        input = document.getElementById('searchBox');
        filter = input.value.toUpperCase();
        content = document.getElementsByTagName('*');

        for (i = 0; i < content.length; i++) {
            var tagName = content[i].tagName.toUpperCase();
            if (tagName !== 'H2' && tagName !== 'H3' && tagName !== 'H4') {
                txtValue = content[i].textContent || content[i].innerText;

                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    content[i].style.display = '';
                } else {
                    content[i].style.display = 'none';
                }
            }
        }
    }

    function filterFunction() {
        var input, filter, content, p, i;
        input = document.getElementById('filterBox');
        filter = input.value.toUpperCase();
        content = document.getElementsByTagName('p');

        for (i = 0; i < content.length; i++) {
            p = content[i];
            if (p.innerText.toUpperCase().indexOf(filter) > -1) {
                content[i].style.display = '';
            } else {
                content[i].style.display = 'none';
            }
        }
    }
</script>