package com.agentworld.app.ui;

import android.content.Context;
import android.util.AttributeSet;

import androidx.constraintlayout.widget.ConstraintLayout;

import com.agentworld.app.R;

public class ModelItemView extends ConstraintLayout {

    public ModelItemView(Context context) {
        super(context);
        init(context, null);
    }

    public ModelItemView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context, attrs);
    }

    public ModelItemView(Context context, AttributeSet attrs, int/style) {
        super(context, attrs, style);
        init(context, attrs);
    }

    private void init(Context context, AttributeSet attrs) {
        inflate(context, R.layout.item_model, this);
    }
}