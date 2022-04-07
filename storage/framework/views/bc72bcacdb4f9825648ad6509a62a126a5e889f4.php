<?php echo $products->scripts(); ?>


<div class="container-fluid">
    <div class="row">
        <div class="col-lg-3">
            <div class="card border-0 text-dark bg-white">

                <?php echo $products->filtersActive(); ?>


                <?php echo $products->search(); ?>


                <?php echo $products->tags(); ?>


                <?php echo $products->categories(); ?>


                <?php echo $products->filters(); ?>


            </div>
        </div>

        <div class="col-lg-9">
            <div class="row">
                <div class="col-xl-6 col-lg-5 col-lg-7 col-lg-2 col-lg-5 py-lg-0 py-4">
                    <p> <?php _e("Displaying"); ?> <?php echo e($products->count()); ?> <?php _e("of"); ?> <?php echo e($products->total()); ?>  <?php _e("result(s)"); ?>.</p>
                </div>
                <div class="col-xl-6 col-lg-7 col-lg-5 d-block d-sm-flex justify-content-end ms-auto">
                    <div class="col-12 col-sm px-1 ms-auto"><?php echo $products->limit(); ?></div>
                    <div class="col-12 col-sm px-1 ms-auto"><?php echo $products->sort(); ?></div>
                </div>
            </div>
            <div class="row">
                <?php $__currentLoopData = $products->results(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="col-xl-4 col-lg-6 col-sm-12 mb-5">
                        <a href="<?php echo e(content_link($product->id)); ?>">
                            <img src="<?php echo e($product->thumbnail(800,800, true)); ?>" alt="">

                            <h6 class="mt-3"><?php echo e($product->title); ?></h6>
                        </a>
                        <p><?php echo e($product->content_text); ?></p>

                        <div class="d-flex">
                            <p class="col-6 mb-0">
                                <?php if($product->hasSpecialPrice()): ?>
                                    <span class="price-old"><?php print currency_format($product->specialPrice); ?></span>
                                <?php endif; ?>
                                <span class="money"><?php print currency_format($product->price); ?></span>
                            </p>

                            <a class="col-6 text-end text-right align-self-center" href="<?php echo e(content_link($product->id)); ?>"> View</a>
                        </div>

                        
                            
                        
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
            <?php echo $products->pagination(); ?>

        </div>
    </div>
</div>








<?php /**PATH C:\laragon\www\microweber\src\MicroweberPackages\Shop\resources\views\/index.blade.php ENDPATH**/ ?>