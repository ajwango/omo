< script >
    $(document).ready(function() {
        $('#data-table').DataTable({
            data: dataArray,
            //CHANGE THE TABLE HEADINGS BELOW TO MATCH WITH YOUR SELECTED DATA RANGE
            columns: [
                { "title": "Product Description" },
                { "title": " Category " },
                { "title": " Week 1 " },
                { "title": " Week 2 " },
                { "title": " Week 3 " },
                { "title": " Week 4 " }
            ]
        });
    });
}