<div class="mb-3 d-flex">
    <label class="control-label align-self-center me-2"><?php _e('Limit');?></label>
    <select class="form-control js-filter-change-limit">
        <option value=""><?php _e('Select');?></option>
        <?php $__currentLoopData = $options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <option value="<?php echo e($option->value); ?>" <?php if($option->active): ?> selected="selected" <?php endif; ?>><?php echo e($option->name); ?></option>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </select>
</div>
<?php /**PATH C:\laragon\www\microweber\src\MicroweberPackages\Blog\resources\views\/partials/limit.blade.php ENDPATH**/ ?>