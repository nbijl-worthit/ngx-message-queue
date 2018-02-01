import {animate, AnimationTriggerMetadata, query, stagger, style, transition, trigger} from '@angular/animations';

const TIMINGS = '275ms';

export const slideDownUp: AnimationTriggerMetadata =
  trigger('slideDownUp', [
    transition('* => *', [
      query(':enter', style({
        display: 'block',
        height: 0,
        opacity: 0,
        overflow: 'hidden',
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
      }), {optional: true}),
      query(':enter', stagger(TIMINGS, [
        animate(`${TIMINGS} ease-in`, style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*',
          marginTop: '*',
          marginBottom: '*',
          opacity: 1,
        }))
      ]), {optional: true}),
      query(':leave', style({
        height: '*',
        overflow: 'hidden',
        paddingTop: '*',
        paddingBottom: '*',
        marginTop: '*',
        marginBottom: '*',
        opacity: 1,
      }), {optional: true}),
      query(':leave', stagger(TIMINGS, [
        animate(`${TIMINGS} ease-out`, style({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
          opacity: 0,
          overflow: 'auto',
          display: 'inline',
        }))
      ]), {optional: true})
    ])
  ]);
