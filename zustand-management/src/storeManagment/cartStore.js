import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useCartStore = create(
  devtools(
    persist(
      (set) => ({
        items: [],
        itemsCount: 0,

        increment: (payload) => {
          set(
            (state) => {
              const updateValue = Number(payload?.updateValue ?? 1);

              return {
                itemsCount:
                  updateValue > 1
                    ? state.itemsCount + updateValue
                    : state.itemsCount + 1
              };
            },
            false,
            'cart/increment' // 👈 action name in DevTools
          );
        },

        decrement: () => {
          set(
            (state) => ({
              itemsCount: Math.max(0, state.itemsCount - 1)
            }),
            false,
            'cart/decrement'
          );
        }
      }),
      {
        name: 'cart-store'
      }
    ),
    {
      name: 'Cart Store DevTools' // 👈 DevTools tab name
    }
  )
);

export { useCartStore };