package m8s.server;

/**
 * Application entry point
 * 
 * @author Patrick Evans
 * 
___  ___ _____  _____   _____                          
|  \/  ||  _  |/  ___| /  ___|                         
| .  . | \ V / \ `--.  \ `--.  ___ _ ____   _____ _ __ 
| |\/| | / _ \  `--. \  `--. \/ _ \ '__\ \ / / _ \ '__|
| |  | || |_| |/\__/ / /\__/ /  __/ |   \ V /  __/ |   
\_|  |_/\_____/\____/  \____/ \___|_|    \_/ \___|_|
*/
public class Main {
	
	// main method
	public static void main(String[] args) {
		// display a welcome message
		displayWelcome();
	}
	
	// prints a welcome message
	private static void displayWelcome() {
		// welcome message
		String welcomeMsg = 
				"\t\t___  ___ _____  _____   _____\n" 
			  + "\t\t|  \\/  ||  _  |/  ___| /  ___|\n"
			  + "\t\t| .  . | \\ V / \\ `--.  \\ `--.  ___ _ ____   _____ _ __ \n"
			  + "\t\t| |\\/| | / _ \\  `--. \\  `--. \\/ _ \\ '__\\ \\ / / _ \\ '__|\n"
			  + "\t\t| |  | || |_| |/\\__/ / /\\__/ /  __/ |   \\ V /  __/ |   \n"
			  + "\t\t\\_|  |_/\\_____/\\____/  \\____/ \\___|_|    \\_/ \\___|_|\n"
			  + "\t\t-------------------------------------------------------\n";
		// print welcome message
		System.out.println(welcomeMsg);
	}
	
}


