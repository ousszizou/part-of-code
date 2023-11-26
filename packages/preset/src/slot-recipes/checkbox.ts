import { defineSlotRecipe } from '@pandacss/dev'

export const checkbox = defineSlotRecipe({
  className: 'checkbox',
  description: 'Styles for the Checkbox component',
  slots: ['base', 'wrapper', 'icon', 'label'],
  base: {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'start',
      cursor: 'pointer',
      padding: '2',
      margin: '-2',
      gap: "1",
      maxWidth: "fit-content",
    },
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      position: "relative",
      overflow: "hidden",
      _hover: {
        backgroundColor: 'accent',
        boxShadow: {
          base: "none",
          _groupDataSelected: "0 3px 15px 0 rgba(30,30,30,.35)",
        },
      },

      _focusVisible: {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: 'ring',
        focusRingOffsetWidth: '2',
      },

      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },

      _before: {
        content: '""',
        position: "absolute",
        inset: "0",
        border: '2px solid',
        borderColor: "border",
      },

      _after: {
        content: '""',
        position: "absolute",
        inset: "0",
        bg: "primary",
        transformOrigin: "center",
        transform: "scale(0.5)",
        _groupDataSelected: {
          transform: "scale(1)",
        },
        opacity: {
          base: "0",
          _groupDataSelected: "1",
        },
      }
    },
    icon: {
      zIndex: '10',
      width: '4',
      height: '3',
      opacity: {
        base: "0",
        _groupDataSelected: "1",
      },
      color: "white"
    },
    label: {
      position: 'relative',
      userSelect: 'none',
      
      '&[data-line-through="true"]': {
        textDecoration: 'line-through',
      },
    },
  },
  variants: {
    color: {
      default: {
        wrapper: {
          _after: {
            bg: 'default',
          },
        },
      },
      primary: {
        wrapper: {
          _after: {
            bg: 'primary',
          },
        },
      },
      secondary: {
        wrapper: {
          _after: {
            bg: 'secondary',
          },
        },
      },
    },
    size: {
      sm: {
        wrapper: {
          w: '4',
          h: '4',
        },
        label: {
          fontSize: 'small',
        },
        icon: {
          w: '3',
          h: '2',
        },
      },
      md: {
        wrapper: {
          w: '5',
          h: '5',
        },
        label: {
          fontSize: 'medium',
        },
        icon: {
          w: '4',
          h: '3',
        },
      },
      lg: {
        wrapper: {
          w: '6',
          h: '6',
        },
        label: {
          fontSize: 'large',
        },
        icon: {
          w: '5',
          h: '4',
        },
      },
    },
    radius: {
      none: {
        wrapper: {
          rounded: "none",
          _before: {
            rounded: "none",
          },
          _after: {
            rounded: "none",
          },
        },
      },
      sm: {
        wrapper: {
          rounded: "sm",
          _before: {
            rounded: "sm",
          },
          _after: {
            rounded: "sm",
          },
        },
      },
      md: {
        wrapper: {
          rounded: "md",
          _before: {
            rounded: "md",
          },
          _after: {
            rounded: "md",
          },
        },
      },
      lg: {
        wrapper: {
          rounded: "lg",
          _before: {
            rounded: "lg",
          },
          _after: {
            rounded: "lg",
          },
        },
      },
      full: {
        wrapper: {
          rounded: "full",
          _before: {
            rounded: "full",
          },
          _after: {
            rounded: "full",
          },
        },
      }
    },
    isDisabled: {
      true: {
        base: {
          pointerEvents: "none",
          cursor: 'not-allowed',
          opacity: '0.5',
        },
      },
    },
    disableAnimation: {
      true: {
        wrapper: {
          transitionProperty: "none",
        },
        icon: {
          transitionProperty: "none",
        },
        label: {
          transitionProperty: "none",
        },
      },
      false: {
        wrapper: {
          transitionTransform: true,
          _groupDataSelected: {
            transform: "scale(.95)",
          },
          _motionReduce: { transition: 'none' },
          _before: {
            transitionColors: true,
          },
          _after: {
            transitionTransformOpacity: true,
          },
        },
        icon: {
          transitionOpacity: true,
          _motionReduce: { transition: 'none' },
        },
        label: {
          transitionColorsOpacity: true,
          _motionReduce: { transition: 'none' },
          _after: {
            transitionWidth: true,
          },
        },
      },
    },
    lineThrough: {
      true: {
        label: {
          position: "relative",
          opacity: ".8",
          _after: {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "0", // TODO: handle RTL
            w: "0",
            h: "0.5",
            bg: "primary",
            _groupDataSelected: {
              w: "full",
            },
          },
        }
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    radius: "md",
    isDisabled: false,
    disableAnimation: false,
    lineThrough: false,
  },
});

export const checkboxGroup = defineSlotRecipe({
  className: "checkbox-group",
  description: 'Styles for the Checkbox Group component',
  slots: ['base', 'label', 'wrapper', 'description','errorMessage'],
  base: {
    base: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "2",
    },
    label: {
      position: "relative",
      fontSize: "medium",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      gap: "2",
      "&[data-orientation=horizontal]": {
        flexDirection: "row",
      }
    },
    description: {
      fontSize: "small",
    },
    errorMessage: {
      fontSize: "small",
      color: "red.400", // TODO: use semantic tokens
    },
  },
  variants: {
    isRequired: {
      true: {
        label: {
          _after: {
            content: '"*"',
            color: "red.400", // TODO: use semantic tokens
            marginBlockStart: "0.5",
          },
        },
      },
    },
    isInvalid: {
      true: {
        description: {
          color: "red.400", // TODO: use semantic tokens
        },
      },
    },
    disableAnimation: {
      true: {},
      false: {
        description: {
          transitionColors: true,
          _motionReduce: { transition: 'none' },
        },
      },
    },
  },
  defaultVariants: {
    isRequired: false,
    isInvalid: false,
    disableAnimation: false,
  },
});
