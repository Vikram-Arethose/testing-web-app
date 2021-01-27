package com.brotchen.app;
import com.getcapacitor.community.firebaseanalytics.FirebaseAnalytics;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(GoogleAuth.class);
      add(com.getcapacitor.community.facebooklogin.FacebookLogin.class);
      add(FirebaseAnalytics.class);
    }});
  }
}
