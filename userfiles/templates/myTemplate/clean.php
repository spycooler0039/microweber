<?php
/*
type: layout
content_type: static
name: Clean
position: 2
description: Clean layout
*/
?>
<?php include template_dir(). "header.php"; ?>
    <div class="edit" rel="content" field="template_name_content">
        <div class="container nodrop">
            <p>This is my text 2</p>
        </div>

        OR

        <!-- Where skin-1 is name of the layout filename from the sidebar  -->
        <module type="layouts" template="skin-1" />
    </div>
<?php include template_dir(). "footer.php"; ?>