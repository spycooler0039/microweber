<?php
/*
type: layout
name: 404
description: Layout description
position: 1
*/
?>
<div class="safe-mode edit" field="layout-kingster-1-<?php print $params['id'] ?>" rel="module">
    <div class="kingster-page-wrapper" id="kingster-page-wrapper">
        <div class="kingster-not-found-wrap" id="kingster-full-no-header-wrap">
            <!-- <div class="kingster-not-found-background" ></div> -->
            <img src="<?php echo template_url(); ?>assets/images/404-background.jpg" style="
                width: 100%;
                max-height: 100%;
                backface-visibility: hidden;
                position: absolute;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                opacity: 0.27;
                filter: alpha(opacity=27);
                background-position: center;
                background-size: cover;"
            >
            <div class="kingster-not-found-container kingster-container">
                <div class="kingster-header-transparent-substitute"></div>
                <div class="kingster-not-found-content kingster-item-pdlr">
                    <h1 class="kingster-not-found-head" >404</h1>
                    <h3 class="kingster-not-found-title kingster-content-font" >Page Not Found</h3>
                    <div class="kingster-not-found-caption" >Sorry, we couldn't find the page you're looking for.</div>
                    <!-- <form role="search" method="get" class="search-form" action="#">
                        <input type="text" class="search-field kingster-title-font" placeholder="Type Keywords..." value="" name="s">
                        <div class="kingster-top-search-submit"><i class="fa fa-search"></i></div>
                        <input type="submit" class="search-submit" value="Search">
                    </form> -->
                </div>
            </div>
        </div>
    </div>
</div>