// @flow strict
import React from 'react';
import { link } from 'gatsby';
import type { Edges } from '../..types'
import styles from './Tile.module.scss';

type Props = {
  edges: Edges
};

const Tile = ({ edges }: Props) => (
  <div className={styles['tileContainer']}>
    {edges.map((edge) => (
      <div className={styles['tileContainer__tile']} key={edge.node.fields.slug}>
        <div className={styles['tileContainer__tile-title']}>
        </div>
      </div>
    ))}
    
  </div>
))
