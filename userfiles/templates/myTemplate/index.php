<?php
/*
  type: layout
  content_type: static
  name: Home
  description: Home layout
*/
?>
<?php include template_dir(). "header.php"; ?>
    <div class="edit" rel="content" field="template_name_content">
        <div class="container nodrop">
            <h2>Welcome to my homepage</h2>
            <p>This is my Microweber template</p>
            <p>You can edit this text, just click here and start typing</p>
        </div>
        <!-- Where skin-1 is name of the layout filename from the sidebar  -->
        <!-- <module type="layouts" template="skin-1" /> -->
    </div>
<?php include template_dir(). "footer.php"; ?>