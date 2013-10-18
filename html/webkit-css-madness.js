/* don't let iOS' "actions" dialog to come up when element is touch/held */
.prevent-action {
    -webkit-touch-callout: none;
}

/* no dragging of element at all */
.content p.no-drag {
    -webkit-user-drag: none;
}

/* drags entire element, not the text/selection */
.sidebar div.element-drag {
    -webkit-user-drag: element;
}

/* change the character used to hide user passwords */
input[type="password"] {
    -webkit-text-security: square;
}
