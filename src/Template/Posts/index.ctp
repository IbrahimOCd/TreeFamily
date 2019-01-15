<?php
    use Cake\Core\Configure;

    $this->set('sidebar', '');
?>
<div id="DashBoardPosts">
<?php
foreach ($posts as $post) {
    echo '<div class="dashboard_post">';
    echo '<div class="_header">';

    // admin actions - DELETE, EDIT
    if ($this->currentUser->exists() && $this->currentUser->get('lvl') <= LVL_EDITOR) {
        echo '<div class="_actions">';
        echo $this->Html->link(__('edit'), ['action' => 'edit', $post->id]);
        echo ' '.__('or').' ';
        echo $this->Html->link(__('delete'), ['action' => 'delete', $post->id],
            ['class' => 'ajax_del_memory', 'id' => 'ProfileMemory'.$post->id],
            __('Are your sure you want to delete this post?')
        );
        echo '</div>';
    }
    echo '<h1>' . $this->Html->link($post->title, ['action' => 'view', $post->id]) . '</h1>';

    // show date of publish and publisher
    printf(
        __('Published %1$s by %2$s.'),
        $this->Time->timeAgoInWords($post->created, ['format' => Configure::read('outputDateFormat').' HH:mm']),
        $this->Html->link($post->creator->d_n, ['controller' => 'Profiles', 'action' => 'view', $post->creator->id])
    );

    // show profiles to which this post is linked
    $linked_to = [];
    foreach ($post->profiles as $profile) {
        if (empty($profile->d_n)) {
            $linked_to[] = __('Unknown');
        } else {
            $linked_to[] = $this->Html->link($profile->d_n, ['controller' => 'Profiles', 'action' => 'view', $profile->id]);
        }
    }
    if (!empty($linked_to)) {
        echo ' ' . __('Linked to') . ' ' . $this->Text->toList($linked_to, __('and')) . '.';
    }

    // show no of comments
    /*echo ' (';
    $comment_count = $post->no_comments;
    echo $this->Html->link(
        sprintf(__n('1 comment', '%d comments', $comment_count), $comment_count),
        ['action'     => 'view', $post->id, '#comments']
    );
    echo ')';*/

    echo '</div>';
    echo '<div class="_body">';
    echo $this->Famiree->autop($body = $this->Famiree->excerpt($post->body));
    echo '</div>';

    if ($body != $post->body) {
        echo '<div class="_readmore">';
        echo $this->Html->link(__('Read more...'), ['action' => 'view', $post->id]);
        echo '</div>';
    }

    echo '</div>';
}
?>
<div class="paginator">
<?= $this->Paginator->numbers(['first' => '1']) ?>
</div>
</div>
