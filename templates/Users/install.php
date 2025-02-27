<?php
    use Cake\Core\Configure;

    $this->set('title_for_layout', __('Add First User'));
?>
<div class="form" id="ProfileLogin">
    <span id="YourFather"><?= __('Your Father') ?></span>
    <span id="YourMother"><?= __('Your Mother') ?></span>
<?php
    echo $this->Form->create(null);
    echo $this->Form->hidden('lvl', ['value' => LVL_ROOT]);
    echo $this->Form->hidden('l', ['value' => true]);
    echo $this->Form->control('fn', ['label' => __('First Name') . ':']);
    echo $this->Form->control('ln', ['label' => __('Last Name') . ':']);
    echo $this->Form->control('e', ['label' => __('Email') . ':']);

    echo '<br />';
    echo $this->Form->control('u', ['label' => __('Username') . ':']);
    echo $this->Form->control('p', ['type' => 'password', 'label' => __('Password') . ':']);
    echo $this->Form->control('repeat_pass', ['type' => 'password', 'label' => __('Repeat Password') . ':']);

    echo '<br />';
    echo $this->Form->submit(__('Save'));
    echo $this->Form->end();
?>
</div>
