package com.example.vaibhav.myapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

// Making the Private Declarations
    private int variable = 0;
    private Button plus;
    private Button order;
    private Button minus;
    private TextView quantity;
    private TextView price;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    //Making all
        plus = (Button)findViewById(R.id.plus);
        minus = (Button)findViewById(R.id.minus);
        order = (Button)findViewById(R.id.button3);
        quantity = (TextView)findViewById(R.id.quantity);
        price = (TextView)findViewById(R.id.price);


    //here it goes
        plus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                variable++;
                quantity.setText(Integer.toString(variable));
            }
        });

        minus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(variable>0){
                    variable--;
                    quantity.setText(Integer.toString(variable));
                }
            }
        });
        order.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                price.setText(Integer.toString(variable*10)+" Rs.");
            }
        });



    }
}
