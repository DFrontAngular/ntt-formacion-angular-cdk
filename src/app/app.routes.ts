import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },

  {
    path: 'accordion',
    loadComponent: () =>
      import('./cdk/accordion/accordion.component').then(
        (c) => c.AccordionComponent
      ),
  },
  {
    path: 'clipboard',
    loadComponent: () =>
      import('./cdk/clipboard/clipboard.component').then(
        (c) => c.ClipboardComponent
      ),
  },
  {
    path: 'dialog',
    loadComponent: () =>
      import('./cdk/dialog/dialog.component').then((c) => c.DialogComponent),
  },
  {
    path: 'drag-drop',
    loadComponent: () =>
      import('./cdk/drag-and-drop/drag-and-drop.component').then(
        (c) => c.DragAndDropComponent
      ),
  },
  {
    path: 'layout',
    loadComponent: () =>
      import('./cdk/layout/layout.component').then((c) => c.LayoutComponent),
  },

  {
    path: 'listbox',
    loadComponent: () =>
      import('./cdk/listbox/listbox.component').then((c) => c.ListboxComponent),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./cdk/menu/menu.component').then((c) => c.MenuComponent),
  },
  {
    path: 'scrolling',
    loadComponent: () =>
      import('./cdk/scrolling/scrolling.component').then(
        (c) => c.ScrollingComponent
      ),
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./cdk/table/table.component').then((c) => c.TableComponent),
  },
];
