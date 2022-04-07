<?php
/*
  type: layout
  content_type: static
  name: Home
  description: Home layout
*/
?>
<?php include template_dir(). "header.php"; ?>
    <div class="edit" rel="content" field="bootstrap_template_content">
        <div class="container nodrop">
            <h2>Welcome to my bootstrap</h2>
        </div>
        <div class="container allow-drop">
            <div class="mw-row">
                <div class="mw-col" style="width:100%">
                    <div class="mw-col-container">
                        <div class="mw-empty"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Where skin-1 is name of the layout filename from the sidebar  -->
        <!-- <module type="layouts" template="skin-1" /> -->
    </div>
<?php include template_dir(). "footer.php"; ?>