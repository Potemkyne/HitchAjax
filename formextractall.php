<?php

include( "conn.php" );
try {
	$sql = " select frtitle from movie ";
	$stmt = $conn->prepare( $sql );
	$stmt->execute();
	$response = $stmt->fetchall(PDO::FETCH_ASSOC);
	$resultat = json_encode( [ 'response' => $response ] );
	if (false === $resultat)
		echo "Erreur encodage JSON de type : " . json_last_error_msg();
	else
		echo $resultat;
} catch ( PDOException $e ) {
	$response = "extraction KO: " . $e->getMessage();
}
$conn = null;

?>