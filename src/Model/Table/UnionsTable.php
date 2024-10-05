<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Unions Model
 *
 * @property \App\Model\Table\UnitsTable|\Cake\ORM\Association\HasMany $Units
 * @method \App\Model\Entity\Union get($primaryKey, $options = [])
 * @method \App\Model\Entity\Union newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Union[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Union|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Union|bool saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Union patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Union[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Union findOrCreate($search, callable $callback = null, $options = [])
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class UnionsTable extends Table
{
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config): void
    {
        parent::initialize($config);

        $this->setTable('unions');
        $this->setDisplayField('id');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp');

        $this->hasMany('Units', [
            'foreignKey' => 'union_id',
        ]);

        $this->belongsToMany('Profiles', [
            'joinTable' => 'units',
            'foreignKey' => 'union_id',
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator): Validator
    {
        $validator
            ->integer('id')
            ->allowEmptyString('id', 'create');

        $validator
            ->scalar('t')
            ->maxLength('t', 1)
            ->allowEmptyString('t');

        $validator
            ->integer('dom_d')
            ->allowEmptyString('dom_d');

        $validator
            ->integer('dom_m')
            ->allowEmptyString('dom_m');

        $validator
            ->scalar('dom_y')
            ->maxLength('dom_y', 10)
            ->allowEmptyString('dom_y');

        $validator
            ->scalar('loc')
            ->maxLength('loc', 100)
            ->allowEmptyString('loc');

        return $validator;
    }
}
