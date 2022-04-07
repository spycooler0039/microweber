<?php
/*
  type: layout
  content_type: dynamic
  name: Blog
  description: Blog layout
*/
?>
<?php include template_dir(). "header.php"; ?>

    <div class="edit" rel="content"  field="template_name_content">
        <div class="container">
            <div class="blog-content">
                <h2>Check out my posts</h2>
                <module type="posts" />
            </div>

            <div class="blog-sidebar">
                <?php include template_dir() . "layouts/blog_sidebar.php"; ?>
            </div>
        </div>
    </div>

<?php include template_dir(). "footer.php"; ?>