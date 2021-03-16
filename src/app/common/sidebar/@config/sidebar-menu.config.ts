// librerie
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCog, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

/**
 * definisce la struttura del menu della sidebar
 * è un array di oggetti composti dalle seguenti proprietà:
 * - name: nome di comodo dell'elemento
 * - type: tipo di elemento. può essere
 *   - link: link ad una risorse, recuperabile dalla proprietà link
 *   - divider: separatore orizzontale
 *   - heading: titolo della sezione di menu
 *   - group: un raggruppamento di sotto menu, definiti nella propery children
 * - icon: icona fontawesome da visualizzare, valida per il tipo 'link'
 * - i18n: chiave per la localizzazione del testo della voce di menu
 * - link: link della risorsa da aprire, valido per tipo 'link'
 * - children: un array di oggetti che rappresentano delle sezioni di sottolink, valido per il tipo 'group', composti da:
 *   - i18n: chiave per la localizzazione del testo della sezione
 *   - links: un array di oggetti che rappresentano i link, composti da:
 *     - name: nome di comodo del link
 *     - i18n: chiave per la localizzazione della voce di menu
 *     - link: link della risorsa da aprire
 */
export const MENU_ITEMS = [
  {
    name: "divider",
    type: "divider",
  },
  {
    name: "dashboard",
    type: "link",
    icon: faTachometerAlt,
    i18n: "common.sidebar.menu.dashboard",
    link: "/",
  },
  {
    name: "divider",
    type: "divider",
  },
  {
    name: "section",
    type: "heading",
    i18n: "Section",
  },
  {
    name: "components",
    type: "group",
    icon: faCog,
    i18n: "Components",
    childrens: [
      {
        i18n: "Component 1",
        links: [
          {
            name: "selection1",
            i18n: "Selection 1",
            link: "/",
          },
          {
            name: "selection2",
            i18n: "Selection 2",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    name: "divider",
    type: "divider",
  },
  {
    name: "anothersection",
    type: "heading",
    i18n: "Another section",
  },
  {
    name: "pages",
    type: "group",
    icon: faCog,
    i18n: "Pages",
    childrens: [
      {
        i18n: "Page 1",
        links: [
          {
            name: "paragraph11",
            i18n: "Paragraph 1.1",
            link: "/",
          },
          {
            name: "paragraph12",
            i18n: "Paragraph 1.2",
            link: "/",
          },
        ],
      },
      {
        i18n: "Page 2",
        links: [
          {
            name: "paragraph21",
            i18n: "Paragraph 2.1",
            link: "/",
          },
          {
            name: "paragraph22",
            i18n: "Paragraph 2.2",
            link: "/",
          },
        ],
      },
    ],
  },
];

