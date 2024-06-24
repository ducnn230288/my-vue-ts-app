import type { CSSProperties } from 'vue';
import { defineComponent, computed, unref } from 'vue';
import { CSvgIcon } from '../svg-icon';

export const CButton = defineComponent({
  name: 'CButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    className: {
      default: '',
      type: String,
    },
    disabled: {
      type: String,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isTiny: {
      type: Boolean,
      default: false,
    },
  },
  setup({ className, disabled, title, text, isLoading, icon, isTiny, ...props }) {
    return () => (
      <button
        type='button'
        disabled={disabled}
        title={title ?? text ?? ''}
        class={[
          'btn',
          className,
          {
            'h-10 px-3': !isTiny,
            'h-6 px-2': isTiny,
          },
        ]}
        {...props}
      >
        {!isLoading ? icon : <CSvgIcon name='spinner' size={12} />}
        {text}
      </button>
    );
  },
});
