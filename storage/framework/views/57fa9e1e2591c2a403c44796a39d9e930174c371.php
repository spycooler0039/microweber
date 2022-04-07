<div class="mb-3 d-flex">
    <label class="control-label align-self-center me-2"><?php _e('Sort');?></label>
    <select class="form-control js-filter-change-sort">
        <option disabled="disabled"><?php _e('Select');?></option>
        <?php $__currentLoopData = $options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <option data-sort="<?php echo e($option->sort); ?>" data-order="<?php echo e($option->order); ?>" <?php if($option->active): ?> selected="selected" <?php endif; ?>><?php echo e($option->name); ?></option>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </select>
</div>
<?php /**PATH C:\laragon\www\microweber\src\MicroweberPackages\Blog\resources\views\/partials/sort.blade.php ENDPATH**/ ?>